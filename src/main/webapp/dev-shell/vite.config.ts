import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

const webappRoot = resolve(__dirname, '..')
const nodeModules = resolve(__dirname, 'node_modules')

export default defineConfig({
  root: resolve(__dirname),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(webappRoot, 'library/src'),
      '@vanillabp/bc-dev-shell-vue': resolve(nodeModules, '@vanillabp/bc-dev-shell-vue/dist/index.js'),
      '@vanillabp/bc-official-gui-client': resolve(nodeModules, '@vanillabp/bc-official-gui-client'),
      '@vanillabp/bc-types': resolve(nodeModules, '@vanillabp/bc-types'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4200,
    fs: {
      allow: [webappRoot, nodeModules],
      strict: false,
    },
    proxy: {
      '/dev-shell': { target: 'http://0.0.0.0:8079', changeOrigin: true },
      '/gui/api': { target: 'http://0.0.0.0:8079', changeOrigin: true },
      '/official-api': { target: 'http://0.0.0.0:8079', changeOrigin: true },
      '/wm/loan-approval': {
        target: 'http://0.0.0.0:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wm\/loan-approval/, ''),
      },
    },
  },
})
