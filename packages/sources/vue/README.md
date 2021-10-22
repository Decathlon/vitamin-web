# `@vtmn/vue`

> Decathlon Design System - Vitamin Vue components library

<a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-vue"><img src="https://img.shields.io/badge/storybook-vue-41B883?style=flat&logo=storybook" alt="storybook" /></a></a>
<a href="https://www.npmjs.com/package/@vtmn/vue"><img src="https://img.shields.io/npm/v/@vtmn/vue?style=flat&logo=npm" alt="npm version" /></a>
<a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_vue"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_vue&metric=alert_status" alt="Quality Gate Status" /></a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/vue` with this command:

```sh
# with npm
npm i -S @vtmn/css-design-tokens @vtmn/vue

# with yarn
yarn add @vtmn/css-design-tokens @vtmn/vue
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

## Install icons (optional)

If you need to use Vue components with icons displayed (via props for icons in some components), you will need to install `@vtmn/icons` package.

```sh
# with npm
npm i -S @vtmn/icons
# with yarn
yarn add @vtmn/icons
```

Then, import the icon font in the entry point of your React application:

```javascript
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
```

Or you can also import it with a CDN like `unpkg.com` with [this file](https://unpkg.com/@vtmn/icons/dist/vitamix/font/vitamix.css).

## Usage

Once you have installed this package, you first need to import some CSS styles.

With a bundler that supports CSS imports in JS files:

```javascript
import '@vtmn/css-design-tokens/dist/index.css';
import '@vtmn/vue/dist/style.css';
```

Otherwise include it in your HTML file:

```html
<link
  rel="stylesheet"
  href="./node_modules/@vtmn/css-design-tokens/dist/index.css"
/>
<link rel="stylesheet" href="./node_modules/@vtmn/vue/dist/style.css" />
```

Once you have installed this package, you just have to import components you need in your Vue application!

Here is an example of the integration of `VtmnButton` component:

```js
import { VtmnButton } from '@vtmn/vue';
...
components:{
  VtmnButton
}
```

## Development

To know all the use cases and their associated code, [check out the showcase here](https://decathlon.github.io/vitamin-web/@vtmn/showcase-vue).

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/vue/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
