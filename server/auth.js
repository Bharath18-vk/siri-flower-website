import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
// Optional plain password for local dev testing if hash is not yet configured
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'dd_home_decor_secret_signing_key_2026';
const COOKIE_NAME = 'admin_token';

/**
 * Validates admin credentials securely
 */
export async function authenticateAdmin(username, password) {
  if (!username || !password) {
    return false;
  }

  if (username.trim() !== ADMIN_USERNAME) {
    return false;
  }

  if (ADMIN_PASSWORD_HASH) {
    return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  }

  // Development fallback: direct comparison if only plain ADMIN_PASSWORD is set
  return password === ADMIN_PASSWORD;
}

/**
 * Creates a signed JWT session token
 */
export function generateAdminToken(username) {
  return jwt.sign(
    {
      username,
      role: 'admin',
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

/**
 * Verifies JWT token
 */
export function verifyAdminToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
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
 * Clears auth cookie on logout
 */
export function clearAuthCookie(res) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    path: '/',
  });
}

/**
 * Express middleware to enforce authentication
 */
export function requireAuth(req, res, next) {
  let token = req.cookies ? req.cookies[COOKIE_NAME] : null;

  // Fallback check in Authorization header
  if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ error: 'Authentication required. Please log in.' });
  }

  const decoded = verifyAdminToken(token);
  if (!decoded) {
    clearAuthCookie(res);
    return res.status(401).json({ error: 'Invalid or expired session. Please log in again.' });
  }

  req.user = decoded;
  next();
}

export { COOKIE_NAME };
