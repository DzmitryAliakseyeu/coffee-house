import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',  // project root
  base: '/coffee-house/', // <-- important for GitHub Pages repo
  build: {
    outDir: 'dist', // or 'docs' if you host from docs folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'pages/menu.html'),
      },
    },
  },
});
