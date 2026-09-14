# D&D Home Decor — Premium Website Concept

A modern, production-grade website concept designed for **D&D Home Decor** (Bengaluru, Karnataka), positioning their window treatments, bespoke furnishings, and interior finishing solutions.

## Overview

- **Brand**: D&D Home Decor
- **Positioning**: Transform Your Space — Home Decor & Interior Spaces
- **Location**: Bengaluru, Karnataka
- **Core Collections**: Curtains, Zebra Blinds, PVC Blinds, Custom Sofas, Wallpapers, Home Décor
- **Primary Conversion**: WhatsApp Direct Click-to-Chat with pre-filled inquiry messages

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS with custom editorial typography and luxury color palette
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6) with single-page application redirect support

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Local Development
`ash
# Install dependencies
npm install

# Start development server
npm run dev
`

### Production Build
`ash
# Type check & build production assets to /dist
npm run build

# Preview production build locally
npm run preview
`

## Deployment Options

### Option 1: Vercel (Recommended)
1. Import this repository into [Vercel](https://vercel.com).
2. Framework preset will automatically detect **Vite**.
3. Output directory is set to **dist**.
4. SPA rewrites are already configured in ercel.json.

### Option 2: Netlify
1. Import this repository into [Netlify](https://netlify.com) or drag and drop the dist folder into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Build command: 
pm run build
3. Publish directory: dist
4. SPA redirects are already configured in public/_redirects.

### Option 3: Cloudflare Pages / GitHub Pages
- Direct deployment from this repository with build output pointing to dist.