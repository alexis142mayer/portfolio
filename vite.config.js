import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Hashed build output, cached forever; public/assets holds unhashed media.
  build: { assetsDir: 'static' },
})
