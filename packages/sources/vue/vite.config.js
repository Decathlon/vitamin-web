import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';

const packagejson = require(path.resolve(process.cwd(), './package.json'));

module.exports = defineConfig({
  plugins: [vue(), typescript({ sourceMap: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: packagejson.name,
      fileName: (format) => `${packagejson.name.split('@')[1]}.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      treeshake: 'recommended',
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        sourcemap: true,
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
