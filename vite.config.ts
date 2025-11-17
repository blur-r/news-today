
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/v2': {
        target: 'https://newsapi.org',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
      },
    },
  },
});