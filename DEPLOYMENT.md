# D&D Home Decor — Production Deployment & Admin Setup Guide

This guide details how to deploy the website and secure Admin Dashboard to **Vercel** with **Supabase (PostgreSQL + Object Storage)** for genuinely persistent, serverless-ready media management.

---

## 1. Architecture Overview

- **Frontend**: React 18 + Vite (SPA) deployed to Vercel CDN.
- **Serverless API**: Node.js Express API (`api/index.js`) deployed to Vercel Serverless Functions (`/api/*`).
- **Database (Metadata)**: Supabase PostgreSQL (`gallery_images` table).
- **File Storage (Images)**: Supabase Object Storage (`gallery` bucket).
- **Authentication**: Signed JWT tokens stored in secure, `HttpOnly`, `SameSite=Lax` cookies; passwords hashed with `bcryptjs`.
- **Local Dev Fallback**: When Supabase credentials are unset, the system automatically persists uploads to `.data/uploads` and records to `.data/media.json`.

---

## 2. Supabase Setup (5 Minutes)

### Step 2.1: Create a Supabase Project
1. Log in to [Supabase](https://supabase.com) and click **New project**.
2. Name the project (e.g. `dnd-home-decor`), set a strong database password, and choose a region close to your users (e.g., `ap-south-1` Mumbai).

### Step 2.2: Create the `gallery_images` Table
Go to the **SQL Editor** tab in the Supabase Dashboard and run the following SQL script:

```sql
-- Create gallery_images metadata table
CREATE TABLE IF NOT EXISTS public.gallery_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  storage_url TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Home Décor',
  title TEXT,
  caption TEXT,
  alt_text TEXT,
  file_size BIGINT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access to gallery images
CREATE POLICY "Allow public read access"
  ON public.gallery_images
  FOR SELECT
  TO public
  USING (true);

-- Allow service role full access (used by serverless API)
CREATE POLICY "Allow service role full access"
  ON public.gallery_images
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create index on category and created_at for fast query performance
CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON public.gallery_images (category);
CREATE INDEX IF NOT EXISTS idx_gallery_images_created_at ON public.gallery_images (created_at DESC);

-- Create admin_users table for client self-service password management
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  token_version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Deny all public and anon access (prevents public REST leakage of password hashes)
CREATE POLICY "Deny all public access to admin_users"
  ON public.admin_users
  FOR ALL
  TO anon, authenticated
  USING (false);

-- Allow service role full access (used exclusively by serverless backend)
CREATE POLICY "Allow service role full access to admin_users"
  ON public.admin_users
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
```

### Step 2.3: Create the Storage Bucket
1. Go to the **Storage** section in your Supabase Dashboard.
2. Click **New bucket**.
3. Bucket Name: `gallery`
4. Set bucket visibility to **Public** (this allows fast CDN image serving to website visitors).
5. Click **Save bucket**.

---

## 3. Generate Secure Admin Credentials

To hash your admin password with `bcrypt`, run this command in your terminal:

```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('YOUR_CHOSEN_PASSWORD', 10));"
```

Copy the generated hash (starts with `$2a$10$...`).

---

## 4. Environment Variables Configuration

Copy `.env.example` to `.env` for local testing or add these variables directly in **Vercel Project Settings > Environment Variables**:

| Variable Name | Description | Example Value |
|---|---|---|
| `ADMIN_USERNAME` | Admin login username | `dnd_admin` |
| `ADMIN_PASSWORD_HASH` | Bcrypt hash of your chosen password | `$2a$10$e8wY...` |
| `JWT_SECRET` | 64+ char random secret key | `generate-a-random-hex-string-here` |
| `SUPABASE_URL` | Supabase Project URL (from Project Settings > API) | `https://xyzcompany.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Service Role secret key | `eyJhbGciOi...` |
| `SUPABASE_STORAGE_BUCKET` | Supabase Storage Bucket name | `gallery` |
| `NODE_ENV` | Environment identifier | `production` |

> ⚠️ **SECURITY WARNING**: Never expose `SUPABASE_SERVICE_ROLE_KEY` in frontend client code. It is only consumed server-side inside `api/index.js` and `server/supabase.js`.

---

## 5. Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. In the **Environment Variables** section, paste all variables from Section 4.
9. Click **Deploy**.

---

## 6. Accessing & Using the Admin Dashboard

- **Admin Login URL**: `https://<your-domain>/admin/login`
- **Dashboard URL**: `https://<your-domain>/admin/dashboard`
- **Gallery Manager**: `https://<your-domain>/admin/gallery`

### Admin Route Secrecy:
- The `/admin` routes are intentionally omitted from customer navigation menus, mobile menus, footers, and `sitemap.xml`.
- `robots.txt` explicitly disallows search engine crawlers from indexing `/admin` and `/api`.
- Unauthenticated requests to `/admin/dashboard` or `/admin/gallery` automatically redirect to `/admin/login`.

---

## 7. Local Development Workflow

To run both the backend API server and Vite client concurrently:

```bash
npm run dev
```

- Backend API: `http://localhost:5000`
- Frontend UI: `http://localhost:3000` (or `3001`)
- Vite proxies `/api` and `/uploads` requests directly to `http://localhost:5000`.
