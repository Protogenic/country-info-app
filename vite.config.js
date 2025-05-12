import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/country-info-app/', // ← это важно для GitHub Pages
  plugins: [react()],
})
