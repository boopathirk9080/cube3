import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: 'build'  // Change this to 'build' if you want to use that folder.
  },
  plugins: [
    tailwindcss(),
    react()],
})
