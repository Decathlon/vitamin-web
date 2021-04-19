# `@vtmn/web-components`

> Decathlon Design System - Vitamin Web Components library

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/web-components` with this command:

```sh
# with npm
npm i -S @vtmn/web-components

# with yarn
yarn add @vtmn/web-components
```

Or you can also install it with a CDN like `unpkg.com`:

```html
<script src="https://unpkg.com/@vtmn/web-components"></script>
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

Once you have installed this package, you just have to define custom elements in your entry point:

In a HTML file:

```html
<script type="module">
  import { defineCustomElements } from './node_modules/@vtmn/web-components/dist/esm/loader.js';

  defineCustomElements();
</script>
```

Or, in a JavaScript file:

```javascript
import { defineCustomElements } from '@vtmn/web-components/dist/esm/loader.js';
defineCustomElements();
```

Then, use a Vitamin Custom Element directly in your HTML. For example:

```html
<vtmn-button onclick="console.log('clicked')">Click</vtmn-button>
```

## Development

To know all the use cases and their associated code, [check out the showcase here](https://decathlon.github.io/vitamin-web/@vtmn/showcase-web-components).

Fore more details about Custom Elements from Web Components specification, [see the MDN documentation here](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/web-components/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
