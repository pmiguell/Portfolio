import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  assetsInclude: ['**/*.docx'],
  plugins: [react()],
  server: {
    host: true
  }
})
