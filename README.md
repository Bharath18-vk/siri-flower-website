# Siri Flower Decoration — Premium Wedding & Event Decoration

A modern, production-grade business website designed for **Siri Flower Decoration** (Bolarum, Secunderabad, Telangana, India), presenting bespoke floral styling, ceremonial mandaps, photo backdrops, and event decor services.

## Overview

- **Brand**: Siri Flower Decoration
- **Tagline**: Turning Your Special Moments Into Beautiful Memories.
- **Location**: near Ratna Colony, Ratna Colony, Bolarum, Secunderabad, Telangana 500010, India
- **Contact / WhatsApp**: +91 99660 42727 (919966042727)
- **Core Offerings**: Wedding Stage Decoration, Floral Backdrops, Wedding Entrance Decoration, Engagement & Reception Decoration, Event Floral Arrangements
- **Primary Conversion**: Contextual WhatsApp Direct Click-to-Chat with pre-filled event inquiry details

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS with custom editorial floral palette (Champagne Gold, Deep Burgundy, Warm Ivory, Sage Green)
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6) with single-page application redirect support
- **Backend / Admin**: Node.js Express serverless API with JWT HttpOnly cookies, bcryptjs password hashing, and Supabase integration

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Local Development
```bash
# Install dependencies
npm install

# Start Vite development server
node node_modules/vite/bin/vite.js
# Or start backend API server
node server/server.js
```

### Production Build
```bash
# Type check & build production assets to /dist
npm run build

# Preview production build locally
npm run preview
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub and import into [Vercel](https://vercel.com).
2. Framework preset will automatically detect **Vite**.
3. Output directory is set to `dist`.
4. SPA rewrites and serverless API endpoints are configured in `vercel.json`.

### Option 2: Netlify
1. Import this repository into [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. SPA redirects are configured in `public/_redirects`.