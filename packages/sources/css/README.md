# `@vtmn/css`

> Decathlon Design System - Vitamin global CSS styles library

## Technologies

- [Tailwind CSS](https://tailwindcss.com/) - All this package is generated with Tailwind CSS, a utility-first CSS framework that can be composed to build any design, directly in your markup. Be careful, in order to use our library, you will have to prefix all CSS utility classes with `vtmn-`.
- [PostCSS](https://postcss.org/) - Under the hood, we use PostCSS to build our library.

## Contributing

One of the Decathlon Design System goals is to provide guidelines & components to gain in consistency, efficiency & accessibility. The best way to achieve this is together!
That's why we are on GitHub. We would love contributions from the community (bug reports, feature requests, suggestions, Pull Requests, whatever you want!).

### Installation

In this monorepo, we use [Yarn](https://yarnpkg.com) & [Lerna](https://github.com/lerna/lerna).
Read the [Installation Guide](https://yarnpkg.com/en/docs/install) for detailed instructions on how to install Yarn.

Once you have installed [Yarn](https://yarnpkg.com), please run:

```sh
yarn
```

> 👉 See [the contributing docs](CONTRIBUTING.md) for more information about how to contribute.

### Development

To develop in watch mode and run all showcases with hot reloads, just run:

```sh
yarn start
```

Then, your CSS is building in watch mode to the `dist` folder.
