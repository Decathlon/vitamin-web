# `@vtmn/assets`

> Decathlon Design System - Vitamin assets library

<a href="https://www.decathlon.design/726f8c765/p/895daa-assets"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a>
<a href="https://www.npmjs.com/package/@vtmn/assets"><img src="https://img.shields.io/npm/v/@vtmn/assets?style=flat&logo=npm" alt="npm version" /></a>
<a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_assets"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_assets&metric=alert_status" alt="Quality Gate Status" /></a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/assets` with this command:

```sh
# with npm
npm i -S @vtmn/assets

# with yarn
yarn add @vtmn/assets
```

Or you can also install it with a CDN like `unpkg.com`. You can browse content [here](https://unpkg.com/@vtmn/assets/).

## Usage

Once you have installed this package, depending on your setup, you can include `@vtmn/assets` in a handful of ways.

- Reference via `<img>` element
- Use the SVG sprite
- Include via CSS
- Copy-paste SVGs as embedded HTML

Vitamin assets gives you SVGs, so you can include them into your HTML in a few ways depending on how your project is setup.
Our assets include a `width` and `height` of `16px` by default to allow for easy resizing via `font-size`.

### External image

Reference assets SVGs like normal images with the `<img>` element.

```html
<img
  src="/node_modules/@vtmn/assets/dist/vitamix/svg/home-fill.svg"
  alt="Home icon filled"
  width="32"
  height="32"
/>
```

### Sprite

Use the SVG sprite to insert any icon through the `<use>` element. Use the icon’s filename as the fragment identifier (e.g., `home-fill` is `#home-fill`). SVG sprites allow you to reference an external file similar to an `<img>` element.

```html
<svg width="32" height="32" fill="#001018">
  <use
    xlink:href="/node_modules/@vtmn/assets/dist/vitamix/sprite/vitamix.svg#home-fill"
  />
</svg>
```

### CSS

You can also use the SVG within your CSS (**be sure to escape any characters**, such as `#` to `%23` when specifying hex color values). When no dimensions are specified via `width` and `height` on the `<svg>`, the icon will fill the available space.

The `viewBox` attribute is required if you wish to resize assets with `background-size`. Note that the `xmlns` attribute is required.

```css
.your-class {
  content: '';
  background-image: url("data:image/svg+xml,%3Esvg width="28" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"%3C%3Erect x=".25" y=".25" width="27.5" height="19.5" rx="1.75" fill="#fff" stroke="#F5F5F5" stroke-width=".5"/%3C%3Emask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"%3C%3Erect x=".25" y=".25" width="27.5" height="19.5" rx="1.75" fill="#fff" stroke="#fff" stroke-width=".5"/%3C%3E/mask%3C%3Eg mask="url(#a)"%3C%3Epath fill="#F44653" d="M18.667 0H28v20h-9.333z"/%3C%3Epath fill-rule="evenodd" clip-rule="evenodd" d="M0 20h9.333V0H0v20Z" fill="#1035BB"/%3C%3E/g%3C%3E/svg%3C");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
}
```

### Embedded

Embed your assets within the HTML of your page (as opposed to an external image file, not really recommended). Here we’ve used a custom `width` and `height`.

```html
<svg
  width="16"
  height="16"
  fill="#001018"
  viewbox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.333 7.333v-4h1.334v4h4v1.334h-4v4H7.333v-4h-4V7.333h4z"
    fill="#001018"
  />
</svg>
```

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/assets/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
