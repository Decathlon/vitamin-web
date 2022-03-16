import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
const preprocessOptions = require('./svelte.config').preprocessOptions;

const src = {
  components: [
    {
      folder: 'actions',
      components: ['VtmnButton', 'VtmnLink'],
    },
    {
      folder: 'forms',
      components: ['VtmnTextInput'],
    },
    {
      folder: 'indicators',
      components: ['VtmnBadge', 'VtmnPrice', 'VtmnRating', 'VtmnTag'],
    },
    {
      folder: 'overlays',
      components: [
        'VtmnAlert',
        'VtmnModal',
        'VtmnPopover',
        'VtmnSnackbar',
        'VtmnToast',
      ],
    },
    {
      folder: 'selection-controls',
      components: ['VtmnCheckbox', 'VtmnChip', 'VtmnToggle'],
    },
    {
      folder: 'structure',
      components: [
        'VtmnAccordion',
        'VtmnCard',
        'VtmnDivider',
        'VtmnList',
        'VtmnListItem',
      ],
    },
  ],
  guidelines: [
    {
      folder: 'iconography',
      components: ['VtmnIcon'],
    },
  ],
};

const svelteOptions = (component) => ({
  output: [
    { file: `dist/${component}.mjs`, format: 'es' },
    { file: `dist/${component}.js`, format: 'umd', name: component },
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(preprocessOptions),
    }),
    css({ output: `${component}.css` }),
    resolve(),
  ],
});

const predicate =
  (baseDir) =>
  ({ folder, components }) =>
    components.map((component) => ({
      input: `src/${baseDir}/${folder}/${component}/${component}.svelte`,
      ...svelteOptions(component),
    }));

export default [
  ...src.components.flatMap(predicate('components')),
  ...src.guidelines.flatMap(predicate('guidelines')),
];
