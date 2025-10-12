import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: '.', // project root
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public',   // source folder
          dest: '',         // copy as-is into dist/public
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist', // output folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'pages/menu.html'),
      },
    },
  },
});
