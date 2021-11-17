import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'CustomWebComponents',
      fileName: (format) => `custom-web-components.${format}.js`,
      formats: ['es'],
    }
  },
  plugins: [
    vue({
      customElement: true,

      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
          // isCustomElement: (tag) => true,
        },
      },
    }),
  ],
})
