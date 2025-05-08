// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
//   base: '',
//   build: {
//     outDir: 'build'  // Change this to 'build' if you want to use that folder.
//   },
//   plugins: [
//     tailwindcss(),
//     react()],
// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  resolve: {
    alias: {                                      // ← wrap your mapping in `alias`
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  base: '',
  build: {
    outDir: 'build',
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
  },
  plugins: [tailwindcss(), react()],
  server: { historyApiFallback: true },
});
