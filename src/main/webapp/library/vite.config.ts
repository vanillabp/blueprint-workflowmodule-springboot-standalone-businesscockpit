import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    vue()
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  build: {
    target: 'es2020',
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        'header': resolve(__dirname, 'src/header-entry.ts'),
        'workflow-page': resolve(__dirname, 'src/workflow-page-entry.ts'),
        'user-task-form': resolve(__dirname, 'src/user-task-form-entry.ts'),
      },

      output: {
        format: 'es',
        entryFileNames: '[name].ce.js',
        chunkFileNames: 'chunks/[name]-[hash].js'
      }
    }
  }
})
