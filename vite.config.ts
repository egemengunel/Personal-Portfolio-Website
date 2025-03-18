import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'analyze' && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-dev-runtime'],
    force: true // Force dependency optimization on every serve
  },
  server: {
    watch: {
      usePolling: true // Add polling for better HMR
    },
    hmr: {
      overlay: true // Show HMR overlay for better error reporting
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
          'icons': ['react-icons']
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs']
    }
  }
}));