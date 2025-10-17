// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/coffee-house/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, './pages/menu.html'),
      }
    }
  }
})
