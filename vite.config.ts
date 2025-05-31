import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@app': '/src/app',
      '@assets': '/src/assets',
      '@environments': '/src/environments',
      '@pages': '/src/app/pages',
      '@core': '/src/app/core',
      '@components': '/src/app/components',
      '@layouts': '/src/app/layouts',
    },
  },
})
