# `@vtmn/svelte`

> Decathlon Design System - Vitamin Svelte library

## Consuming Components

Your package.json has a `"svelte"` field pointing to `src/components/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`).
