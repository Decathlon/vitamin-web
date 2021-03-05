# `@vtmn/icons`

> Decathlon Design System - Vitamin icons library

<a href="https://www.decathlon.design/726f8c765/p/91dc94-iconography"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a>
<a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-icons"><img src="https://img.shields.io/badge/storybook-icons-295573?style=flat&logo=storybook" alt="storybook" /></a>
<a href="https://www.npmjs.com/package/@vtmn/icons"><img src="https://img.shields.io/npm/v/@vtmn/icons?style=flat&logo=npm" alt="npm version" /></a>
<a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_icons"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_icons&metric=alert_status" alt="Quality Gate Status" /></a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@vtmn/icons` with this command:

```sh
# with npm
npm i -S @vtmn/icons

# with yarn
yarn add @vtmn/icons
```

Or you can also install it with a CDN like `unpkg.com`:

```html
<script src="https://unpkg.com/@vtmn/icons"></script>
```

## Usage

Once you have installed this package, depending on your setup, you can include `@vtmn/icons` in a handful of ways.

- Reference via `<img>` element
- Use the SVG sprite
- Use the icon font
- Include via CSS
- Copy-paste SVGs as embedded HTML

Vitamin icons gives you SVGs, so you can include them into your HTML in a few ways depending on how your project is setup.
Our icons include a `width` and `height` of `16px` by default to allow for easy resizing via `font-size`.

### External image

Reference Icons SVGs like normal images with the `<img>` element.

```html
<img
  src="/node_modules/@vtmn/icons/vitamix/dist/svg/home-fill.svg"
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
    xlink:href="/node_modules/@vtmn/icons/vitamix/dist/sprite/vitamix.svg#home-fill"
  />
</svg>
```

### Icon font

Icon fonts with classes for every icon are also included. Include the icon web fonts in your page via CSS (`./node_modules/@vtmn/icons/dist/vitamix.css`), then reference the class names as needed (e.g. `vtmx-home-fill` for the `home-fill` icon) in your HTML.

Use `font-size` and `color` to change the icon appearance.

If your icon is followed by a text:

```html
<span aria-hidden="true" class="“vtmx-home-fill”"> </span> Homepage
```

If your icon is alone:

```html
<span aria-label="Homepage" class="“vtmx-home-fill”"> </span>
```

### CSS

You can also use the SVG within your CSS (**be sure to escape any characters**, such as `#` to `%23` when specifying hex color values). When no dimensions are specified via `width` and `height` on the `<svg>`, the icon will fill the available space.

The `viewBox` attribute is required if you wish to resize icons with `background-size`. Note that the `xmlns` attribute is required.

```css
.vtmx::before {
  display: inline-block;
  content: '';
  vertical-align: -0.125em;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path d="M7.3337.333v-4h1.334v4h4v1.334h-4v4h7.333v-4h-4v7.333h4z' fill='#001018'/></svg>');
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
}
```

### Embedded

Embed your icons within the HTML of your page (as opposed to an external image file, not really recommended). Here we’ve used a custom `width` and `height`.

```html
<svg width="16" height="16" fill="#001018" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7.333 7.333v-4h1.334v4h4v1.334h-4v4H7.333v-4h-4V7.333h4z"
    fill="#001018"
  />
</svg>
```

## Development

To know all the use cases and their associated code, [check out the showcase here](https://decathlon.github.io/vitamin-web/@vtmn/showcase-icons).

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/icons/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Vitamix Icons is the official Decathlon icon library based on the open-source icon library called [Remix Icon](https://remixicon.com/). This original library is under the license Apache 2.0 and has been modified by Decathlon. [Learn more](https://www.decathlon.design/726f8c765/p/76e6e0-vitamix-license).

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
