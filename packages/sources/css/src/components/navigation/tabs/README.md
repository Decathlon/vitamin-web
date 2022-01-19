# `@vtmn/css-tabs`

> Decathlon Design System - Vitamin specific CSS styles for tabs component

<a href="https://www.decathlon.design/726f8c765/p/705308-tabs-beta/b/4177c3">
  <img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" />
</a>
<a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-tabs--overview">
  <img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" />
</a>
<a href="https://www.npmjs.com/package/@vtmn/css-tabs">
  <img src="https://img.shields.io/npm/v/@vtmn/css-tabs?style=flat&logo=npm" alt="npm version" />
</a>
<a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css">
  <img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" />
</a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/css-tabs` with this command:

```sh
# with npm
npm i -S @vtmn/css-tabs

# with yarn
yarn add @vtmn/css-tabs
```

Or you can also install it with a CDN like `unpkg.com`:

```html
<link rel="stylesheet" href="https://unpkg.com/@vtmn/css-tabs" />
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

Once you have installed this package, you just have to import CSS styles!

### Without theming

If you don't need different themes, you can choose the specific CSS package without CSS variables.

With a bundler that supports CSS imports in JS files:

```javascript
import '@vtmn/css-tabs/dist/index.css';
```

Otherwise include it in your HTML file:

```html
<link rel="stylesheet" href="./node_modules/@vtmn/css-tabs/dist/index.css" />
```

### With theming

If you need different themes, you can choose the specific CSS package with CSS variables. For this, be sure to install & import `@vtmn/css-design-tokens` before:

```sh
# with npm
npm i -S @vtmn/css-design-tokens

# with yarn
yarn add @vtmn/css-design-tokens
```

Or you can also install it with a CDN like `unpkg.com`:

```html
<link rel="stylesheet" href="https://unpkg.com/@vtmn/css-design-tokens" />
```

With a bundler that supports CSS imports in JS files:

```javascript
import '@vtmn/css-design-tokens/dist/index.css';
import '@vtmn/css-tabs/dist/index-with-vars.css';
```

Otherwise include it in your HTML file:

```html
<link
  rel="stylesheet"
  href="./node_modules/@vtmn/css-design-tokens/dist/index.css"
/>
<link
  rel="stylesheet"
  href="./node_modules/@vtmn/css-tabs/dist/index-with-vars.css"
/>
```

## Development

To know all the use cases and their associated code, [check out the showcase here](https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/index.html?path=/docs/components-tabs--overview).

## Documentation

For more information about how this component is designed and how to use it in your application, [check out the decathlon.design docs](https://www.decathlon.design/726f8c765/p/8008f8-tabs)

## Base 10 support

If your project uses the mathematical trick of basing the value of `1rem` equals `10px`, there is also an `index-base10` output within the `dist` folder of this package.

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/tabs/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
