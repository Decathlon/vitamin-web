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
  <a aria-label="license" href="https://join.slack.com/t/decathlon-design/shared_invite/zt-lvx09ln9-Im190Mul4MAfQgKmXszJ~A">
    <img src="https://img.shields.io/badge/slack-Decathlon%20Design%20System-purple.svg?logo=slack" alt="">
  </a>
</p>

## Introduction

[Decathlon Design System](https://decathlon.design) is the framework that helps our ecosystem to design and develop consistent and quality experiences. For its [Digital section](https://www.decathlon.design/726f8c765/p/6145b2-overview), it is called Vitamin.

This repository hosts libraries for web applications.

## Packages

In order to allow you to consume the elements of the Design System **according to your product constraints**, we give you the possibility of using the Vitamin web libraries with **different technologies & levels of granularity**.

### Global CSS styles 🎨

This package provides you with a complete CSS with a huge set of utility classes as it is generated with [Tailwind CSS](https://tailwindcss.com). Then it will be up to you to [optimize for production](https://tailwindcss.com/docs/optimizing-for-production) by purging the CSS according to the classes used in your HTML:

<table>
  <tr>
    <th>@vtmn/css</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css">Showcase</a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/css"><img src="https://img.shields.io/npm/v/@vtmn/css?style=flat" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

### Specific CSS styles 🖌

These packages allow the consumption of elements with a higher level of granularity. You get only the styles you need and what you consume is Pure CSS without [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), therefore IE 11 compatible:

#### For design tokens

<table>
  <tr>
    <th>@vtmn/css-design-tokens</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/design-tokens#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css">Showcase</a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/css-design-tokens"><img src="https://img.shields.io/npm/v/@vtmn/css-design-tokens?style=flat" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

#### For each component

<table>
  <tr>
    <th>@vtmn/css-button</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/button#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-button--default">Showcase</a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/css-button"><img src="https://img.shields.io/npm/v/@vtmn/css-button?style=flat" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
  <tr>
    <th>@vtmn/css-text-input</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/text-input#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-text-input--default">Showcase</a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/css-text-input"><img src="https://img.shields.io/npm/v/@vtmn/css-text-input?style=flat" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

#### For utilities

<table>
  <tr>
    <th>@vtmn/css-utilities</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/utilities#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css">Showcase</a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/css-utilities"><img src="https://img.shields.io/npm/v/@vtmn/css-utilities?style=flat" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

### Web Components

This package provides you with a library of Web Components ([Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)). So, you will be able to use custom `<vtmn-**>` HTML tags directly in your markup:

<table>
  <tr>
    <th>@vtmn/web-components</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/web-components#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-web-components">Showcase</a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/web-components"><img src="https://img.shields.io/npm/v/@vtmn/web-components?style=flat" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_web-components"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_web-components&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

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

| Showcase       | URL                                     |
| -------------- | --------------------------------------- |
| CSS            | [localhost:6006](http://localhost:6006) |
| Web Components | [localhost:6007](http://localhost:6007) |

> 👉 See [the contributing docs](CONTRIBUTING.md) for more information about how to contribute.

## Special thanks

Thank you to the [contributors](https://github.com/Decathlon/vitamin-web/graphs/contributors) involved in this project. 💙

<a href="https://github.com/decathlon/vitamin-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=decathlon/vitamin-web" />
</a>

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
