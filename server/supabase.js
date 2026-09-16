import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function normalizeSupabaseUrl(raw) {
  if (!raw) return '';
  let url = String(raw).trim().replace(/^["']|["']$/g, '');

  // Case 1: If user pasted dashboard URL: https://supabase.com/dashboard/project/<project-ref>...
  const dashboardMatch = url.match(/supabase\.com\/dashboard\/project\/([a-zA-Z0-9_-]+)/i);
  if (dashboardMatch) {
    return `https://${dashboardMatch[1]}.supabase.co`;
  }

  // Case 2: Project URL with /rest/v1, /storage/v1, or /auth/v1 appended
  url = url.replace(/\/rest\/v1.*$/i, '');
  url = url.replace(/\/storage\/v1.*$/i, '');
  url = url.replace(/\/auth\/v1.*$/i, '');

  // Case 3: Trailing slashes
  url = url.replace(/\/+$/, '');

  // Case 4: Ensure https protocol if missing
  if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
    url = `https://${url}`;
  }

  return url;
}

function normalizeSecretKey(raw) {
  if (!raw) return '';
  return String(raw).trim().replace(/^["']|["']$/g, '');
}

const rawUrl = process.env.SUPABASE_URL;
const rawKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const SUPABASE_URL = normalizeSupabaseUrl(rawUrl);
const SUPABASE_SERVICE_ROLE_KEY = normalizeSecretKey(rawKey);
const STORAGE_BUCKET = (process.env.SUPABASE_STORAGE_BUCKET || 'gallery').trim();

const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);

let supabase = null;
if (isSupabaseConfigured) {
  supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  console.log(`[Storage] Connected to Supabase Cloud PostgreSQL & Storage at: ${SUPABASE_URL}`);
} else {
  console.log(
    '[Storage] Note: Supabase credentials not set. Using persistent local fallback (.data/uploads & .data/media.json).'
  );
}

import os from 'os';

// Fallback Directories (dev or temporary lambda)
const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
const DATA_DIR = isServerless ? path.join(os.tmpdir(), 'dnd_data') : path.resolve(__dirname, '../.data');
const UPLOADS_DIR = path.resolve(DATA_DIR, 'uploads');
const DB_FILE = path.resolve(DATA_DIR, 'media.json');
const ADMIN_DB_FILE = path.resolve(DATA_DIR, 'admin_user.json');

if (!isSupabaseConfigured) {
  try {
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
  } catch (err) {
    console.warn('[Storage] Notice: Could not create local directory, will rely on cloud storage:', err.message);
  }
}

function readLocalDB() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading local DB:', err);
  }
  return [];
}

function writeLocalDB(records) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(records, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing local DB:', err);
  }
}

/**
 * Get all gallery images
 */
export async function getAllImages() {
  if (isSupabaseConfigured) {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[Supabase] Error fetching images:', error);
      throw error;
    }
    return data || [];
  }

  // Local fallback
  const records = readLocalDB();
  return records.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

/**
 * Upload single image to storage and return storage details
 */
export async function uploadToStorage(fileBuffer, originalFilename, mimeType) {
  const ext = path.extname(originalFilename).toLowerCase() || '.jpg';
  const cleanName = path
    .basename(originalFilename, ext)
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .slice(0, 40);
  const uniqueName = `dd_${Date.now()}_${Math.random().toString(36).substring(2, 7)}_${cleanName}${ext}`;

  if (isSupabaseConfigured) {
    const filePath = uniqueName;
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, fileBuffer, {
        contentType: mimeType,
        upsert: false,
      });

    if (error) {
      console.error('[Supabase Storage] Upload error:', error);
      throw error;
    }

    const { data: publicUrlData } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(filePath);

    return {
      storageUrl: publicUrlData.publicUrl,
      storagePath: filePath,
      filename: uniqueName,
    };
  }

  // Local fallback
  const localFilePath = path.join(UPLOADS_DIR, uniqueName);
  fs.writeFileSync(localFilePath, fileBuffer);

  return {
    storageUrl: `/uploads/${uniqueName}`,
    storagePath: uniqueName,
    filename: uniqueName,
  };
}

/**
 * Create image metadata record in database
 */
export async function createImageRecord(recordData) {
  const record = {
    filename: recordData.filename,
    storage_url: recordData.storageUrl,
    storage_path: recordData.storagePath,
    category: recordData.category,
    title: recordData.title || '',
    caption: recordData.caption || '',
    alt_text: recordData.altText || '',
    file_size: recordData.fileSize || 0,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    const { data, error } = await supabase
      .from('gallery_images')
      .insert([record])
      .select()
      .single();

    if (error) {
      console.error('[Supabase DB] Insert error:', error);
      throw error;
    }
    return data;
  }

  // Local fallback
  const records = readLocalDB();
  const newRecord = {
    id: `local_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...record,
  };
  records.push(newRecord);
  writeLocalDB(records);
  return newRecord;
}

/**
 * Update image metadata record
 */
export async function updateImageRecord(id, updates) {
  const allowedFields = ['category', 'title', 'caption', 'alt_text'];
  const sanitizedUpdates = {};
  for (const field of allowedFields) {
    if (updates[field] !== undefined) {
      sanitizedUpdates[field] = updates[field];
    }
  }

  if (isSupabaseConfigured) {
    const { data, error } = await supabase
      .from('gallery_images')
      .update(sanitizedUpdates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('[Supabase DB] Update error:', error);
      throw error;
    }
    return data;
  }

  // Local fallback
  const records = readLocalDB();
  const index = records.findIndex((r) => r.id === id);
  if (index === -1) {
    throw new Error('Image record not found');
  }

  records[index] = { ...records[index], ...sanitizedUpdates };
  writeLocalDB(records);
  return records[index];
}

/**
 * Delete image from storage and database
 */
export async function deleteImageRecord(id) {
  let recordToDelete = null;

  if (isSupabaseConfigured) {
    const { data, error: findError } = await supabase
      .from('gallery_images')
      .select('*')
      .eq('id', id)
      .single();

    if (findError || !data) {
      throw new Error('Image not found');
    }
    recordToDelete = data;

    // Remove from storage
    if (recordToDelete.storage_path) {
      await supabase.storage
        .from(STORAGE_BUCKET)
        .remove([recordToDelete.storage_path]);
    }

    // Remove from DB
    const { error: deleteError } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', id);

    if (deleteError) {
      throw deleteError;
    }

    return true;
  }

  // Local fallback
  const records = readLocalDB();
  const index = records.findIndex((r) => r.id === id);
  if (index === -1) {
    throw new Error('Image not found');
  }
  recordToDelete = records[index];

  // Remove local file
  const localFilePath = path.join(UPLOADS_DIR, recordToDelete.storage_path);
  if (fs.existsSync(localFilePath)) {
    try {
      fs.unlinkSync(localFilePath);
    } catch (e) {
      console.warn('Failed to delete local file:', e);
    }
  }

  records.splice(index, 1);
  writeLocalDB(records);
  return true;
}

/**
 * Retrieve administrator record by username from Supabase or local fallback
 */
export async function getAdminUser(username) {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('username', username)
        .maybeSingle();

      if (error) {
        if (
          error.code === '42P01' ||
          error.message?.includes('relation "admin_users" does not exist') ||
          error.message?.includes('admin_users')
        ) {
          console.warn(
            "[Admin Auth] Notice: 'admin_users' table does not exist in Supabase yet. Please create it via SQL Editor."
          );
          return null;
        }
        console.error('[Supabase DB] Error fetching admin user:', error);
        return null;
      }
      return data;
    } catch (err) {
      console.error('[Supabase DB] Exception fetching admin user:', err.message);
      return null;
    }
  }

  // Local fallback
  try {
    if (fs.existsSync(ADMIN_DB_FILE)) {
      const raw = fs.readFileSync(ADMIN_DB_FILE, 'utf-8');
      const user = JSON.parse(raw);
      if (user && user.username === username) {
        return user;
      }
    }
  } catch (err) {
    console.error('[Storage] Error reading local admin user file:', err);
  }
  return null;
}

/**
 * Bootstrap the initial administrator record if not present
 */
export async function bootstrapAdminUser(username, passwordHash) {
  const initialUser = {
    username,
    password_hash: passwordHash,
    token_version: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .insert([initialUser])
        .select()
        .single();

      if (error) {
        console.warn('[Supabase DB] Could not bootstrap admin user into admin_users table:', error.message);
        return null;
      }
      return data;
    } catch (err) {
      console.warn('[Supabase DB] Bootstrap exception:', err.message);
      return null;
    }
  }

  // Local fallback
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(ADMIN_DB_FILE, JSON.stringify(initialUser, null, 2), 'utf-8');
    return initialUser;
  } catch (err) {
    console.error('[Storage] Error writing local admin user file:', err);
    return null;
  }
}

/**
 * Update administrator password hash in Supabase or local fallback
 */
export async function updateAdminPassword(username, newPasswordHash) {
  if (isSupabaseConfigured) {
    const existing = await getAdminUser(username);
    const nextVersion = (existing?.token_version || 1) + 1;

    const { data, error } = await supabase
      .from('admin_users')
      .update({
        password_hash: newPasswordHash,
        token_version: nextVersion,
        updated_at: new Date().toISOString(),
      })
      .eq('username', username)
      .select()
      .single();

    if (error) {
      console.error('[Supabase DB] Error updating admin password in database:', error);
      throw error;
    }
    return data;
  }

  // Local fallback
  const existing = (await getAdminUser(username)) || { username };
  const nextVersion = (existing.token_version || 1) + 1;
  const updated = {
    ...existing,
    username,
    password_hash: newPasswordHash,
    token_version: nextVersion,
    updated_at: new Date().toISOString(),
  };

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(ADMIN_DB_FILE, JSON.stringify(updated, null, 2), 'utf-8');
  return updated;
}

export { isSupabaseConfigured, UPLOADS_DIR };

