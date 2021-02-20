import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';
const preprocessOptions = require('./svelte.config').preprocessOptions;

const components = ['Button'];

export default components.map((name) => ({
  input: `src/components/${name}.svelte`,
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
