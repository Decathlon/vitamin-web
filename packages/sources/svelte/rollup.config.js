import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';
const preprocessOptions = require('./svelte.config').preprocessOptions;

const components = [
  {
    folder: 'actions',
    name: 'VtmnButton',
  },
  {
    folder: 'actions',
    name: 'VtmnLink',
  },
  {
    folder: 'forms',
    name: 'VtmnTextInput',
  },
  {
    folder: 'overlays',
    name: 'VtmnPopover',
  },
  {
    folder: 'indicators',
    name: 'VtmnPrice',
  },
];

const guidelines = [
  {
    folder: 'shadows',
    name: 'VtmnShadows',
  },
];

const svelteOptions = (name) => ({
  output: [
    { file: `dist/${name}.mjs`, format: 'es' },
    { file: `dist/${name}.js`, format: 'umd', name },
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(preprocessOptions),
    }),
    css({ output: `${name}.css` }),
    resolve(),
  ],
});

export default [
  ...components.map(({ folder, name }) => ({
    input: `src/components/${folder}/${name}/${name}.svelte`,
    ...svelteOptions(name),
  })),
  ...guidelines.map(({ folder, name }) => ({
    input: `src/guidelines/${folder}/${name}.js`,
    ...svelteOptions(name),
  })),
];
