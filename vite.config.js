import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/country-info-app/', 
  plugins: [react()],
})
