# `@vtmn/svelte`

> Decathlon Design System - Vitamin Svelte components library

<a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-svelte"><img src="https://img.shields.io/badge/storybook-svelte-F13C03?style=flat&logo=storybook" alt="storybook" /></a></a>
<a href="https://www.npmjs.com/package/@vtmn/svelte"><img src="https://img.shields.io/npm/v/@vtmn/svelte?style=flat&logo=npm" alt="npm version" /></a>
<a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_svelte"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_svelte&metric=alert_status" alt="Quality Gate Status" /></a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/svelte` with this command:

```sh
# with npm
npm i -S @vtmn/svelte

# with yarn
yarn add @vtmn/svelte
```

## Install fonts

[Roboto](https://fonts.google.com/specimen/Roboto) & [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) fonts as described in [Typography](https://www.decathlon.design/726f8c765/v/0/p/860e14-typography) section will not be automatically loaded. Fortunately, there is a few easy ways to get started.

Shown below is a sample link markup used to load from a CDN:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
/>
```

You can also do it via CSS Import:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap');
```

Otherwise, you can install them with `typeface`:

```sh
# with npm
npm i -S typeface-roboto typeface-roboto-condensed

# with yarn
yarn add typeface-roboto typeface-roboto-condensed
```

Then, you can import them in your entry-point:

```javascript
import 'typeface-roboto';
import 'typeface-roboto-condensed';
```

## Usage

To use this package, you need to use the source files and compile on your side. To do so, you can start with [+SvelteKit](https://kit.svelte.dev/) for example.

You should then preprocess the component CSS since they are imported in each corresponding component with an [`@import`](https://developer.mozilla.org/fr/docs/Web/CSS/@import) rule. There are several ways to resolve path of an `@import` rule, our recommended way is to use the [postcss-import](https://github.com/postcss/postcss-import) plugin.

For example, here is a working `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import atImport from 'postcss-import';

const config = {
  preprocess: preprocess({
    postcss: {
      plugins: [
        atImport({
          root: process.cwd(),
          // import should default to node_modules, then look into src
          path: [
            join(process.cwd(), 'node_modules'),
            join(process.cwd(), 'src'),
          ],
        }),
      ],
    },
  }),
  kit: {
    adapter: adapter(),
  },
};

export default config;
```

Then, you just need to import components you need. Example with `VtmnButton`:

```js
// App.svelte
<script>
  import { VtmnButton } from '@vtmn/svelte';
</script>

<VtmnButton>Button</VtmnButton>
```

If you need to display icons, you will need to import `@vtmn/icons` icon font like this:

```javascript
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
```

Or you can also import it with a CDN like `unpkg.com` with [this file](https://unpkg.com/@vtmn/icons/dist/vitamix/font/vitamix.css).

## Development

To know all the use cases and their associated code, [check out the showcase here](https://decathlon.github.io/vitamin-web/@vtmn/showcase-svelte).

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/svelte/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
