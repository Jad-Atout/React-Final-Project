import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/cart': {
        target: 'https://ecommerce-node4.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
