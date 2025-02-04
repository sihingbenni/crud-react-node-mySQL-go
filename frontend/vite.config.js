import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // tell the server to listen to all network interfaces
  // by binding to 0.0.0.0
  server: {
    host: '0.0.0.0'
  }
})
