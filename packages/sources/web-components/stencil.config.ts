import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';

export const config: Config = {
  namespace: 'vtmn-web-components',
  globalStyle: '../css/src/design-tokens/dist/index.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'dist/custom-elements.json',
    },
  ],
  plugins: [
    postcss({
      plugins: [postcssImport(), autoprefixer()],
    }),
  ],
};
