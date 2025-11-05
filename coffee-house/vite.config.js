// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/coffee-house/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'pages/menu.html'),
        cart: resolve(__dirname, 'pages/cart.html'),
        registration: resolve(__dirname, 'pages/registration.html'),
        signin: resolve(__dirname, 'pages/sign-in.html'),
      },
    },
  },
});
