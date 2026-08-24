import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Respect a PORT provided by the environment (falls back to Vite's default).
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
