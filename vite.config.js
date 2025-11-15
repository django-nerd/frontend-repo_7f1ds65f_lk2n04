import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite dev server host checks: explicitly allow our preview domains
// Add both the exact host and broad patterns for modal-hosted previews
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    holdUntilCrawlEnd: true
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    hmr: false,
    watch: false,
    cors: {
      origin: '*',
      credentials: true
    },
    allowedHosts: [
      'ta-01ka3cyht5xc3q1wczfhx7ddxf-3000.wo-biyahrq0rox2rnfxkq0h5k.w.modal.host',
      '.modal.host',
      '.modal.run',
      'localhost',
      '127.0.0.1'
    ]
  }
})
