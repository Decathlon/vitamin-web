# `@vtmn/css-tailwind-preset`

> Decathlon Design System - Vitamin CSS Tailwind preset

<a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a>
<a href="https://www.npmjs.com/package/@vtmn/css"><img src="https://img.shields.io/npm/v/@vtmn/css?style=flat&logo=npm" alt="npm version" /></a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/css-tailwind-preset` with this command:

```sh
# with npm
npm i -S @vtmn/css-tailwind-preset

# with yarn
yarn add @vtmn/css-tailwind-preset
```

## Install fonts

[Roboto](https://fonts.google.com/specimen/Roboto) & [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) fonts as described in [Typography](https://www.decathlon.design/726f8c765/v/0/p/860e14-typography) section will not be automatically loaded. Fortunately, there is a few easy ways to get started.

You can install them with [FontSource](https://github.com/fontsource/fontsource):

```sh
# with npm
npm i -S @fontsource/roboto @fontsource/roboto-condensed

# with yarn
yarn add @fontsource/roboto @fontsource/roboto-condensed
```

Then, within your app entry file or site component, import it in:

```javascript
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/400.css'; // Specify weight
import '@fontsource/roboto/400-italic.css'; // Specify weight and style
```

In order to enhance performance of your app, please read about [font subsetting](https://web.dev/font-best-practices/#subset-fonts). [FontSource explains it here](https://fontsource.org/docs/getting-started/subsets).

Otherwise, you can also load them through CDN:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
/>
```

Finally, you can also import them via CSS import:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap');
```

## Install icons (optional)

If you need to display icons, you will need to install `@vtmn/icons` package.

```sh
# with npm
npm i -S @vtmn/icons

# with yarn
yarn add @vtmn/icons
```

Then follow instructions in [README of @vtmn/icons](https://www.npmjs.com/package/@vtmn/icons) :

```javascript
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
```

Or you can also import it with a CDN like `unpkg.com` with [this file](https://unpkg.com/@vtmn/icons/dist/vitamix/font/vitamix.css).

## Development

If you are there, it's probably because you already use [Tailwind CSS](https://tailwindcss.com/) in your project. If you want to take full advantage of all its features like [functions & directives](https://tailwindcss.com/docs/functions-and-directives) by building your own classes via [`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply) for example inherited from the Vitamin CSS styles, you are at the right place!

If you don't have Tailwind CSS and you are interested, you can install it by following [this documentation](https://tailwindcss.com/docs/installation). If not, we encourage you to simply you our [`@vtmn/css`](https://www.npmjs.com/package/@vtmn/css) package which will give you all the different Vitamin styles without the need to build them with Tailwind CSS.

In order to use our Tailwind preset, simply add this line inside your `tailwind.config.js` file:

### TailwindCSS v2

```js
module.exports = {
  presets: [require('@vtmn/css-tailwind-preset')],
  // ...
};
```

### TailwindCSS v3

```js
module.exports = {
  presets: [require('@vtmn/css-tailwind-preset')],
  theme: {
    colors: {
      current: 'currentColor',
    },
  },
};
```

Then import files inside your CSS entry point:

```css
@import 'tailwindcss/base'; /* import base CSS classes from Tailwind CSS (optional) */
@import '@vtmn/css-design-tokens/dist/index.css'; /* import Vitamin design tokens CSS classes (required) */
@import '@vtmn/css-utilities/dist/index.css'; /* import Vitamin utilities CSS classes (required) */
@import 'tailwindcss/components'; /* import components CSS classes from Tailwind CSS (optional) */
@import 'tailwindcss/utilities'; /* import utilities CSS classes from Tailwind CSS (optional) */
@import 'tailwindcss/screens'; /* import screens CSS classes from Tailwind CSS (optional) */
@import '@vtmn/css/dist/components.css'; /* import Vitamin components CSS classes (required) */
```

_You will need a plugin to understand `@import` statements. If you use PostCSS, you can use [postcss-import](https://www.npmjs.com/package/postcss-import)._

For more details about Tailwind presets, [see Tailwind CSS documentation about presets here](https://tailwindcss.com/docs/presets).

Important: our Tailwind CSS preset has a prefix in order to avoid conflicts with existing Tailwind CSS project. So, to use our library, you will have to prefix all CSS utility classes with `vtmn-`.

To know all the use cases and their associated code, [check out the showcase here](https://decathlon.github.io/vitamin-web/@vtmn/showcase-css).

For example:

```html
<div
  class="vtmn-flex vtmn-bg-brand-digital-light-3 vtmn-rounded-lg vtmn-p-6 vtmn-mb-5"
>
  <p class="vtmn-text-xl vtmn-text-center vtmn-font-semibold vtmn-text-black">
    Hello
    <span class="vtmn-text-brand-digital vtmn-text-2xl">World!</span>
    <span role="img" aria-label="Welcome menu"> 🎉 </span>
  </p>
</div>
```

For more details about CSS utility classes from this package, [see Tailwind CSS documentation here](https://tailwindcss.com/docs).

## Optimizing for production

To make the development experience as productive as possible, Tailwind generates thousands of utility classes for you, most of which you probably won't actually use.

When building for production, you should always use [PurgeCSS](https://purgecss.com) to tree-shake unused styles and optimize your final build size.

For more details about this, [see Tailwind CSS documentation about optimizing for production here](https://tailwindcss.com/docs/optimizing-for-production).

## Base 10 support

If your project uses the mathematical trick of basing the value of `1rem` equals `10px`, you can import files like this instead:

```css
@import 'tailwindcss/base'; /* import base CSS classes from Tailwind CSS (optional) */
@import '@vtmn/css-design-tokens/dist/index-base10.css'; /* import Vitamin design tokens CSS classes (required) */
@import '@vtmn/css-utilities/dist/index-base10.css'; /* import Vitamin utilities CSS classes (required) */
@import 'tailwindcss/components'; /* import components CSS classes from Tailwind CSS (optional) */
@import 'tailwindcss/utilities'; /* import utilities CSS classes from Tailwind CSS (optional) */
@import 'tailwindcss/screens'; /* import screens CSS classes from Tailwind CSS (optional) */
@import '@vtmn/css/dist/components-base10.css'; /* import Vitamin components CSS classes (required) */
```

_You will need a plugin to understand `@import` statements. If you use PostCSS, you can use [postcss-import](https://www.npmjs.com/package/postcss-import)._

## Playground

If you want to test Vitamin Tailwind CSS utility classes, [see our live playground here](https://play.tailwindcss.com/BeTM6rz97A).

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/presets/tailwind/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
