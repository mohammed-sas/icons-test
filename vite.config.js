// vite.config.js
import { defineConfig } from 'vite';
// import lit from '@vitejs/plugin-lit';

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: 'src/components/fc-icon/fc-icon-lit.js',
      name: 'FcIcon',
      fileName: format => `fc-icon.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
  },
});
