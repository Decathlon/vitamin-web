import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import svelte from 'rollup-plugin-svelte';
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
    folder: 'indicators',
    name: 'VtmnBadge',
  },
  {
    folder: 'indicators',
    name: 'VtmnPrice',
  },
  {
    folder: 'indicators',
    name: 'VtmnTag',
  },
  {
    folder: 'overlays',
    name: 'VtmnPopover',
  },
  {
    folder: 'selection-controls',
    name: 'VtmnCheckbox',
  },
  {
    folder: 'selection-controls',
    name: 'VtmnToggle',
  },
  {
    folder: 'structure',
    name: 'VtmnDivider',
  },
  {
    folder: 'structure',
    name: 'VtmnList',
  },
  {
    folder: 'structure',
    name: 'VtmnListItem',
  },
];

export default components.map(({ folder, name }) => ({
  input: `src/components/${folder}/${name}/${name}.svelte`,
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
}));
