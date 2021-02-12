# `@vtmn/css`

> Decathlon Design System - Vitamin Vitamin global CSS styles library

<a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a>
<a href="https://www.npmjs.com/package/@vtmn/css"><img src="https://img.shields.io/npm/v/@vtmn/css?style=flat&logo=npm" alt="npm version" /></a>
<a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" /></a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/css` with this command:

```sh
# with npm
npm i -S @vtmn/css

# with yarn
yarn add @vtmn/css
```

Or you can also install it with a CDN like `unpkg.com`:

```html
<link rel="stylesheet" href="https://unpkg.com/@vtmn/css" />
```

## Install fonts

[Roboto](https://fonts.google.com/specimen/Roboto) & [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) fonts as described in [Typography](https://www.decathlon.design/726f8c765/v/0/p/860e14-typography) section will not be automatically loaded. Fortunately, there is a few easy ways to get started.

Shown below is a sample link markup used to load from a CDN:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
/>
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

With a bundler that supports CSS imports in JS files:

```javascript
import '@vtmn/css/dist/index.css';
```

Otherwise include it in your HTML file:

```html
<link rel="stylesheet" href="./node_modules/@vtmn/css/dist/index.css" />
```

## Development

All this package is generated with [Tailwind CSS](https://tailwindcss.com), a utility-first CSS framework that can be composed to build any design, directly in your markup.
Be careful, in order to use our library, you will have to prefix all CSS utility classes with `vtmn-`.

To know all the use cases and their associated code, [check out the showcase guidelines here](https://decathlon.github.io/vitamin-web/@vtmn/showcase-css).

For example:

```html
<div
  class="vtmn-flex vtmn-bg-brand-digital-light-3 vtmn-rounded-lg vtmn-p-6 vtmn-mb-5"
>
  <p class="vtmn-text-xl vtmn-text-center vtmn-font-semibold vtmn-text-black">
    Hello
    <span class="vtmn-text-brand-digital vtmn-text-2xl">World!</span>
    <span role="img" aria-label="Tada!"> 🎉 </span>
  </p>
</div>
```

Fore more details about CSS utility classes from this package, [see Tailwind CSS documentation here](https://tailwindcss.com/docs).

## Optimize for production

To make the development experience as productive as possible, Tailwind generates thousands of utility classes for you, most of which you probably won't actually use.

When building for production, you should always use [PurgeCSS](https://purgecss.com) to tree-shake unused styles and optimize your final build size.

## Playground

If you want to test Vitamin Tailwind CSS utility classes, [see our live playground here](https://play.tailwindcss.com/BeTM6rz97A).

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
