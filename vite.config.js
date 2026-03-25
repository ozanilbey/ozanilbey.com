// Modules
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// Configuration
const configuration = defineConfig({
  build: {
    manifest: true,
    rollupOptions: { input: './source/client.jsx' }
  },
  css: { devSourcemap: true },
  plugins: [react({ jsxRuntime: 'automatic' })],
  publicDir: 'public',
  resolve: {
    alias: { '@source': path.resolve(__dirname, './source') },
    extensions: ['.js', '.json', '.jsx']
  },
  server: {
    host: true,
    open: '/',
    port: 3000
  }
})

// Export
export default configuration
