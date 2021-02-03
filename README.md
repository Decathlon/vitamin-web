<p align="center">
  <img
    width="300px"
    src="https://user-images.githubusercontent.com/9600228/102414461-e3b92b00-3ff6-11eb-9c96-5f37c4d5e02c.png"
    alt="Vitamin Decathlon Design System logo" />
</p>

<h1 align="center">Vitamin Web</h1>

<p align="center">Decathlon Design System libraries for web applications</p>

<p align="center"><a href="https://www.decathlon.design">www.decathlon.design</a></p>

<p align="center">
  <a aria-label="contributors graph" href="https://github.com/decathlon/vitamin-web/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/decathlon/vitamin-web.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/Decathlon/vitamin-web/commits">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/decathlon/vitamin-web.svg">
  </a>
  <a aria-label="license" href="https://github.com/decathlon/vitamin-web/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/decathlon/vitamin-web.svg" alt="">
  </a>
  <a aria-label="GitHub Actions - Build main branch" href="https://github.com/Decathlon/vitamin-web/actions">
    <img src="https://github.com/Decathlon/vitamin-web/workflows/Build%20main%20branch/badge.svg" alt="">
  </a>
</p>

## Introduction

[Decathlon Design System](https://decathlon.design) is the framework that helps our ecosystem to design and develop consistent and quality experiences. For its [Digital section](https://www.decathlon.design/726f8c765/p/6145b2-overview), it is called Vitamin.

This repository hosts libraries for web applications.

## Packages

In order to allow you to consume the elements of the Design System **according to your product constraints**, we give you the possibility of using the Vitamin web libraries with **different technologies & levels of granularity**.

### Global CSS styles

This package provides you with a complete CSS with a huge set of utility classes as it is generated with [Tailwind CSS](https://tailwindcss.com). Then it will be up to you to [optimize for production](https://tailwindcss.com/docs/optimizing-for-production) by purging the CSS according to the classes used in your HTML:

- [@vtmn/css](https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css#readme) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status)](https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css) [![npm version](https://img.shields.io/npm/v/@vtmn/css?style=flat)](https://www.npmjs.com/package/@vtmn/css)

### Specific CSS styles

These packages allow the consumption of elements with a higher level of granularity. You get only the styles you need and what you consume is Pure CSS without CSS Custom Properties, therefore IE 11 compatible:

#### For each component

- [@vtmn/css-button](https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/button#readme)[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_button&metric=alert_status)](https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css_components_button) [![npm version](https://img.shields.io/npm/v/@vtmn/css-button?style=flat)](https://www.npmjs.com/package/@vtmn/css-button)
- [@vtmn/css-text-input](https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/text-input#readme)[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_button&metric=alert_status)](https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css_components_text-input) [![npm version](https://img.shields.io/npm/v/@vtmn/css-text-input?style=flat)](https://www.npmjs.com/package/@vtmn/css-text-input)

#### For design tokens

- [@vtmn/css-design-tokens](https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/design-tokens#readme) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_design-tokens&metric=alert_status)](https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css_design-tokens) [![npm version](https://img.shields.io/npm/v/@vtmn/css-design-tokens?style=flat)](https://www.npmjs.com/package/@vtmn/css-design-tokens)

#### For utilities

- [@vtmn/css-utilities](https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/utilities#readme) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_utilities&metric=alert_status)](https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css_utilities) [![npm version](https://img.shields.io/npm/v/@vtmn/css-utilities?style=flat)](https://www.npmjs.com/package/@vtmn/css-utilities)

## Contributing

One of the Decathlon Design System goals is to provide guidelines & components to gain in consistency, efficiency & accessibility. The best way to achieve this is together!
That's why we are on GitHub. We would love contributions from the community _(bug reports, feature requests, suggestions, Pull Requests, whatever you want!)_.

In this monorepo, we use [Yarn](https://yarnpkg.com) & [Lerna](https://github.com/lerna/lerna).
Read the [Installation Guide](https://yarnpkg.com/en/docs/install) for detailed instructions on how to install Yarn.

Once you have installed it, please run:

```sh
yarn
```

Then, to develop in watch mode and run all showcases with hot reloads, just run:

```sh
yarn start
```

Finally, the different showcases will be launched:

| Showcase | URL                                     |
| -------- | --------------------------------------- |
| CSS      | [localhost:6006](http://localhost:6006) |

> 👉 See [the contributing docs](CONTRIBUTING.md) for more information about how to contribute.

## Special thanks

Thank you to the [contributors](https://github.com/Decathlon/vitamin-web/graphs/contributors) involved in this project. 💙

<a href="https://github.com/decathlon/vitamin-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=decathlon/vitamin-web" />
</a>

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
