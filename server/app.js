import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';
import {
  authenticateAdmin,
  generateAdminToken,
  setAuthCookie,
  clearAuthCookie,
  requireAuth,
  verifyAdminToken,
  verifyAdminSession,
  COOKIE_NAME,
} from './auth.js';
import {
  getAllImages,
  uploadToStorage,
  createImageRecord,
  updateImageRecord,
  deleteImageRecord,
  getAdminUser,
  updateAdminPassword,
  UPLOADS_DIR,
} from './supabase.js';

const app = express();

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Serve local fallback uploads if directory exists
if (fs.existsSync(UPLOADS_DIR)) {
  app.use('/uploads', express.static(UPLOADS_DIR));
}

// Multer memory storage configuration for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype.toLowerCase())) {
      return cb(
        new Error('Unsupported file type. Only JPG, JPEG, PNG, and WEBP images are allowed.'),
        false
      );
    }
    cb(null, true);
  },
});

// ==========================================
// AUTHENTICATION ROUTES
// ==========================================

/**
 * POST /api/auth/login
 */
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const isValid = await authenticateAdmin(username, password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const token = await generateAdminToken(username);
    setAuthCookie(res, token);

    return res.json({
      success: true,
      username,
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'An error occurred during authentication.' });
  }
});

/**
 * GET /api/auth/me
 * Verifies current session via HttpOnly cookie and database token version
 */
app.get('/api/auth/me', async (req, res) => {
  const token = req.cookies ? req.cookies[COOKIE_NAME] : null;
  if (!token) {
    return res.json({ authenticated: false });
  }

  const decoded = await verifyAdminSession(token);
  if (!decoded) {
    clearAuthCookie(res);
    return res.json({ authenticated: false });
  }

  return res.json({
    authenticated: true,
    username: decoded.username,
  });
});

/**
 * POST /api/auth/logout
 */
app.post('/api/auth/logout', (req, res) => {
  clearAuthCookie(res);
  return res.json({ success: true });
});

/**
 * POST /api/auth/change-password
 * Authenticated endpoint for self-service admin password management
 */
app.post('/api/auth/change-password', requireAuth, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    // 1. Validation: required fields
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        error: 'Current password, new password, and confirm password are all required.',
      });
    }

    if (
      typeof currentPassword !== 'string' ||
      typeof newPassword !== 'string' ||
      typeof confirmPassword !== 'string'
    ) {
      return res.status(400).json({ error: 'Invalid password format.' });
    }

    // 2. Validation: confirmation match
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'New password and confirm password do not match.' });
    }

    // 3. Validation: prevent reusing identical password
    if (currentPassword === newPassword) {
      return res.status(400).json({
        error: 'New password must be different from your current password.',
      });
    }

    // 4. Strong Password Policy:
    // - Minimum 8 characters
    // - At least 1 uppercase letter
    // - At least 1 lowercase letter
    // - At least 1 number
    // - At least 1 special character
    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long.' });
    }
    if (!/[A-Z]/.test(newPassword)) {
      return res.status(400).json({ error: 'Password must contain at least one uppercase letter (A-Z).' });
    }
    if (!/[a-z]/.test(newPassword)) {
      return res.status(400).json({ error: 'Password must contain at least one lowercase letter (a-z).' });
    }
    if (!/[0-9]/.test(newPassword)) {
      return res.status(400).json({ error: 'Password must contain at least one number (0-9).' });
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(newPassword)) {
      return res.status(400).json({
        error: 'Password must contain at least one special character (e.g. !@#$%^&*).',
      });
    }

    const username = req.user.username;

    // 5. Verify current password
    const user = await getAdminUser(username);
    if (!user || !user.password_hash) {
      return res.status(401).json({ error: 'Admin user account record could not be found.' });
    }

    const isCurrentValid = await bcrypt.compare(currentPassword, user.password_hash);
    if (!isCurrentValid) {
      return res.status(401).json({ error: 'Current password is incorrect.' });
    }

    // 6. Bcrypt hash new password (12 salt rounds)
    const saltRounds = 12;
    const newHash = await bcrypt.hash(newPassword, saltRounds);

    // 7. Persist new hash and increment token version
    await updateAdminPassword(username, newHash);

    // 8. Invalidate active session across devices by clearing cookie
    clearAuthCookie(res);

    console.log(`[Auth] Password changed successfully for admin '${username}'. Session cookie cleared.`);

    return res.json({
      success: true,
      message: 'Password changed successfully. Please log in again with your new credentials.',
    });
  } catch (err) {
    console.error('Password change error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred while changing password.' });
  }
});

// ==========================================
// GALLERY & MEDIA ROUTES
// ==========================================

/**
 * GET /api/gallery
 * Public endpoint to fetch all admin-managed images
 */
app.get('/api/gallery', async (req, res) => {
  try {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    const images = await getAllImages();
    return res.json({ images });
  } catch (err) {
    console.error('Error fetching gallery images:', err);
    return res.status(500).json({ error: 'Failed to fetch gallery images.' });
  }
});

/**
 * POST /api/gallery
 * Protected endpoint to upload 1 or multiple images
 */
app.post('/api/gallery', requireAuth, upload.array('images', 12), async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'Please select at least one image to upload.' });
    }

    const category = req.body.category || 'Home Décor';
    const title = req.body.title || '';
    const caption = req.body.caption || '';
    const altText = req.body.altText || title || '';

    const createdRecords = [];

    for (const file of files) {
      // 1. Upload to persistent cloud / local storage
      const storageResult = await uploadToStorage(
        file.buffer,
        file.originalname,
        file.mimetype
      );

      // 2. Insert metadata record into database
      const record = await createImageRecord({
        filename: storageResult.filename,
        storageUrl: storageResult.storageUrl,
        storagePath: storageResult.storagePath,
        category,
        title,
        caption,
        altText,
        fileSize: file.size,
      });

      createdRecords.push(record);
    }

    return res.status(201).json({
      success: true,
      count: createdRecords.length,
      records: createdRecords,
    });
  } catch (err) {
    console.error('Upload error:', err);
    return res.status(500).json({ error: err.message || 'Failed to upload images.' });
  }
});

/**
 * PUT /api/gallery/:id
 * Protected endpoint to update metadata of an uploaded image
 */
app.put('/api/gallery/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { category, title, caption, alt_text } = req.body;

    const updated = await updateImageRecord(id, {
      category,
      title,
      caption,
      alt_text,
    });

    return res.json({
      success: true,
      record: updated,
    });
  } catch (err) {
    console.error('Update error:', err);
    return res.status(500).json({ error: err.message || 'Failed to update image details.' });
  }
});

/**
 * DELETE /api/gallery/:id
 * Protected endpoint to delete an image from storage and database
 */
app.delete('/api/gallery/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await deleteImageRecord(id);
    return res.json({ success: true, message: 'Image deleted successfully.' });
  } catch (err) {
    console.error('Delete error:', err);
    return res.status(500).json({ error: err.message || 'Failed to delete image.' });
  }
});

// Global error handler (e.g. Multer file size errors)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum file size allowed is 10MB.' });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err) {
    return res.status(400).json({ error: err.message || 'An unexpected error occurred.' });
  }
  next();
});

export default app;
