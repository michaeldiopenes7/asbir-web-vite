import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  base: '/asbir-web-vite/',
  plugins: [
    react(),
    // Gzip compression for smaller file transfers
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression (better compression ratio)
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: true,
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
          }
        },
      },
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Disable source maps for production
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets < 4kb as base64
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
