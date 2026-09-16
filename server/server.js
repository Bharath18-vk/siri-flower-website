import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[D&D Backend] Server running on http://localhost:${PORT}`);
  console.log(`[D&D Backend] Auth endpoints: /api/auth/login, /api/auth/me, /api/auth/logout`);
  console.log(`[D&D Backend] Gallery endpoint: /api/gallery`);
});
