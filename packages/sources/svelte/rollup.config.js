import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import fs from 'fs';
import path from 'path';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

const preprocessOptions = require('./svelte.config').preprocessOptions;

const postcssProcess = (component, variant = '') =>
  postcss({
    extract: `${component}${variant}.css`,
    plugins: [
      postcssImport({
        load: (filename) => {
          const finalPath = filename.includes('@vtmn/css-')
            ? filename.replaceAll('.css', `${variant}.css`)
            : filename;
          return fs.readFileSync(path.resolve(finalPath), {
            encoding: 'utf8',
            flag: 'r',
          });
        },
      }),
      postcssUrl({
        url: ({ absolutePath, pathname }) => {
          const dist = path.join(__dirname, 'dist');
          if (!fs.existsSync(dist)) {
            fs.mkdirSync(dist, { recursive: true });
          }
          const destinationPath = path.join(__dirname, 'dist', pathname);
          if (!fs.existsSync(destinationPath)) {
            fs.copyFileSync(absolutePath, destinationPath);
          }
          return pathname;
        },
      }),
    ],
  });

const globals = {
  'svelte/internal': 'svelte/internal',
  svelte: 'svelte',
};

const svelteOptions = (component, variant) => ({
  external: /^svelte.*$/,
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals,
    },
    {
      file: pkg.main,
      format: 'umd',
      name: 'index',
      sourcemap: true,
      globals,
    },
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(preprocessOptions),
    }),
    postcssProcess(component, variant),
    resolve({
      // Exclude all svelte related stuff
      resolveOnly: [/^(?!svelte.*$)/],
    }),
    terser(),
  ],
});

export default [
  ...[undefined, '-base10', '-with-vars-base10', '-with-vars'].map(
    (variant) => ({
      input: 'src/index.js',
      ...svelteOptions('index', variant),
    }),
  ),
];
