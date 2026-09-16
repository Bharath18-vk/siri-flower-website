import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getAdminUser, bootstrapAdminUser } from './supabase.js';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
// Optional plain password for local dev testing if hash is not yet configured
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'dd_home_decor_secret_signing_key_2026';
const COOKIE_NAME = 'admin_token';

/**
 * Validates admin credentials securely against database hash
 */
export async function authenticateAdmin(username, password) {
  if (!username || !password) {
    return false;
  }

  if (username.trim() !== ADMIN_USERNAME) {
    return false;
  }

  // 1. Fetch user from database
  let user = null;
  try {
    user = await getAdminUser(ADMIN_USERNAME);
  } catch (err) {
    console.error('[Auth] Error fetching admin user from database:', err.message);
  }

  // 2. If no user exists in database yet, bootstrap initial record
  if (!user) {
    let initialHash = ADMIN_PASSWORD_HASH;
    if (!initialHash) {
      // In development or bootstrap migration: hash initial password
      initialHash = bcrypt.hashSync(ADMIN_PASSWORD, 10);
    }

    try {
      user = await bootstrapAdminUser(ADMIN_USERNAME, initialHash);
      if (user) {
        console.log(`[Auth] Bootstrapped initial admin user '${ADMIN_USERNAME}' in database.`);
      }
    } catch (err) {
      console.warn('[Auth] Database bootstrap notice:', err.message);
    }
  }

  // 3. Authenticate against database record hash
  if (user && user.password_hash) {
    return bcrypt.compare(password, user.password_hash);
  }

  // 4. Production guard: NEVER allow fallback passwords if DB record is missing
  if (process.env.NODE_ENV === 'production') {
    if (ADMIN_PASSWORD_HASH) {
      return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    }
    return false;
  }

  // 5. Development offline fallback only
  return password === ADMIN_PASSWORD;
}

/**
 * Creates a signed JWT session token with token version
 */
export async function generateAdminToken(username) {
  let tokenVersion = 1;
  try {
    const user = await getAdminUser(username);
    if (user && user.token_version !== undefined) {
      tokenVersion = user.token_version;
    }
  } catch (err) {
    // fallback to version 1
  }

  return jwt.sign(
    {
      username,
      role: 'admin',
      tokenVersion,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

/**
 * Basic synchronous JWT verification (signature & expiration)
 */
export function verifyAdminToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

/**
 * Comprehensive session verification including token version check against DB
 */
export async function verifyAdminSession(token) {
  const decoded = verifyAdminToken(token);
  if (!decoded || !decoded.username) {
    return null;
  }

  try {
    const user = await getAdminUser(decoded.username);
    if (user && user.token_version !== undefined && decoded.tokenVersion !== undefined) {
      if (decoded.tokenVersion !== user.token_version) {
        console.warn(`[Auth] Session invalidated: token version ${decoded.tokenVersion} does not match current version ${user.token_version}`);
        return null;
      }
    }
  } catch (err) {
    // proceed if db is momentarily unreachable
  }

  return decoded;
}

/**
 * Sets secure HttpOnly cookie on response
 */
export function setAuthCookie(res, token) {
  const isProduction = process.env.NODE_ENV === 'production';
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/',
  });
}

/**
 * Clears auth cookie on logout or password change
 */
export function clearAuthCookie(res) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    path: '/',
  });
}

/**
 * Express middleware to enforce authentication and session validity
 */
export async function requireAuth(req, res, next) {
  let token = req.cookies ? req.cookies[COOKIE_NAME] : null;

  // Fallback check in Authorization header
  if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ error: 'Authentication required. Please log in.' });
  }

  const decoded = await verifyAdminSession(token);
  if (!decoded) {
    clearAuthCookie(res);
    return res.status(401).json({ error: 'Invalid or expired session. Please log in again.' });
  }

  req.user = decoded;
  next();
}

export { COOKIE_NAME };

