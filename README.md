<p align="center">
  <img
    width="300px"
    src="https://user-images.githubusercontent.com/9600228/102414461-e3b92b00-3ff6-11eb-9c96-5f37c4d5e02c.png#gh-light-mode-only"
    alt="Vitamin Decathlon Design System logo" />
  <img
    width="300px"
    src="https://user-images.githubusercontent.com/9600228/147513091-66fcc204-279b-4140-9be5-c16744c0f637.png#gh-dark-mode-only"
    alt="Vitamin Decathlon Design System logo" />
</p>

<h1 align="center">Vitamin Web</h1>

<p align="center">Decathlon Design System libraries for web applications</p>

<p align="center">
  <a href="https://www.decathlon.design">Website</a> - <a href="https://decathlon.github.io/vitamin-web">Showcases</a>
</p>

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
  <a aria-label="slack" href="https://join.slack.com/t/decathlon-design/shared_invite/zt-13kxb50ar-iHzqV~Olsu4~NCkEPj5c4g">
    <img src="https://img.shields.io/badge/slack-Decathlon%20Design%20System-purple.svg?logo=slack" alt="">
  </a>
</p>

## Introduction

[Decathlon Design System](https://decathlon.design) is the framework that helps our ecosystem to design and develop consistent and quality experiences. For its [Digital section](https://www.decathlon.design/726f8c765/p/6145b2-overview), it is called Vitamin.

This repository hosts libraries for web applications.

## Core packages

In order to allow you to consume the elements of the Design System **according to your product constraints**, we give you the possibility of using the Vitamin web libraries with **different technologies & levels of granularity** with core packages developed and maintained by the Vitamin core team.

### Global CSS styles 🎨

This package provides you with a complete CSS with a huge set of utility classes as it is generated with [Tailwind CSS](https://tailwindcss.com). Then it will be up to you to [optimize for production](https://purgecss.com/) by purging the CSS according to the classes used in your HTML:

<table>
  <tr>
    <th>@vtmn/css</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/css"><img src="https://img.shields.io/npm/v/@vtmn/css?style=flat&logo=npm" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

If you already using [Tailwind CSS](https://tailwindcss.com/) in your project or you want to take full advantage of all its features like [functions & directives](https://tailwindcss.com/docs/functions-and-directives) by building your own classes via [`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply) for example. You can check our package [`@vtmn/css-tailwind-preset`](https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/presets/tailwind#readme) which will explain you how to use Vitamin styles in a Tailwind CSS project.

### Specific CSS styles 🖌

These packages allow the consumption of elements with a higher level of granularity. You get only the styles you need and what you consume is Pure CSS without [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), therefore IE 11 compatible:

<details>
  <summary>For design tokens</summary>

  <table>
    <tr>
      <th>@vtmn/css-design-tokens</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/design-tokens#readme">README</a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/index.html?path=/story/guidelines-colors--page"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-design-tokens"><img src="https://img.shields.io/npm/v/@vtmn/css-design-tokens?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css_design-tokens"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_design-tokens&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>
</details>

<details>
  <summary>For each component</summary>

  <h4>Actions</h4>

  <table>
    <tr>
      <th>@vtmn/css-button</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/actions/button#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/8008f8-button"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-actions-button--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-button"><img src="https://img.shields.io/npm/v/@vtmn/css-button?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_button"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_button&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-dropdown</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/actions/dropdown#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/v/0/p/42d824-dropdown"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-actions-dropdown--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-dropdown"><img src="https://img.shields.io/npm/v/@vtmn/css-dropdown?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_dropdown"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_dropdown&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
     <tr>
      <th>@vtmn/css-link</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/actions/link#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/086ae8-link"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-actions-link--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-link"><img src="https://img.shields.io/npm/v/@vtmn/css-link?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_link"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_link&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>

  <h4>Forms</h4>

  <table>
    <tr>
      <th>@vtmn/css-select</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/forms/select#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/46ee45-select-beta/b/136a45"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-forms-select--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-select"><img src="https://img.shields.io/npm/v/@vtmn/css-select?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_select"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_select&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-text-input</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/forms/text-input#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/31121d-text-input"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-forms-text-input--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-text-input"><img src="https://img.shields.io/npm/v/@vtmn/css-text-input?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_text-input"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_text-input&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>

  <h4>Indicators</h4>

  <table>
    <tr>
      <th>@vtmn/css-badge</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/indicators/badge#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/465f7c-badge-beta"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-indicators-badge--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-badge"><img src="https://img.shields.io/npm/v/@vtmn/css-badge?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_badge"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_badge&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-loader</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/indicators/loader#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/09b561-loader-beta/b/32cf1b"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-indicators-loader--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-loader"><img src="https://img.shields.io/npm/v/@vtmn/css-loader?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_loader"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_loader&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-price</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/indicators/price#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/v/0/p/81e6be-price-beta"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-indicators-price--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-price"><img src="https://img.shields.io/npm/v/@vtmn/css-price?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_price"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_price&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-progressbar</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/indicators/progressbar#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/2388f2-progressbar-beta"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-indicators-progressbar--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-progressbar"><img src="https://img.shields.io/npm/v/@vtmn/css-progressbar?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_progressbar"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_progressbar&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-rating</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/indicators/rating#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/19ec87-rating-beta/b/5496b9"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-indicators-rating--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-rating"><img src="https://img.shields.io/npm/v/@vtmn/css-rating?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_rating"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_rating&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-tag</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/indicators/tags#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/v/0/p/129f57-tag-beta"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-indicators-tag--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-tag"><img src="https://img.shields.io/npm/v/@vtmn/css-tag?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_tag"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_tag&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>

  <h4>Navigation</h4>

  <table>
    <tr>
      <th>@vtmn/css-breadcrumb</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/navigation/breadcrumb#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/v/0/p/95fc13-breadcrumb"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-navigation-breadcrumb--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-breadcrumb"><img src="https://img.shields.io/npm/v/@vtmn/css-breadcrumb?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_breadcrumb"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_breadcrumb&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-navbar</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/navigation/navbar#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/9596dd-navbar-beta/b/08a8f6"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-navigation-navbar--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-navbar"><img src="https://img.shields.io/npm/v/@vtmn/css-navbar?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_navbar"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_navbar&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-search</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/navigation/search#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/v/0/p/666649-search-beta/b/711780"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-navigation-search--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-search"><img src="https://img.shields.io/npm/v/@vtmn/css-search?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_search"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_search&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-tabs</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/navigation/tabs#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/705308-tabs-beta/b/4177c3"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-navigation-tabs--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-tabs"><img src="https://img.shields.io/npm/v/@vtmn/css-tabs?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_tabs"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_tabs&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>

  <h4>Overlays</h4>

  <table>
    <tr>
      <th>@vtmn/css-alert</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/overlays/alert#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/64b4b5-alert-beta/b/129609"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-overlays-alert--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-alert"><img src="https://img.shields.io/npm/v/@vtmn/css-alert?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_alert"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_alert&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-modal</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/overlays/modal#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/9596dd-modal-beta/b/08a8f6"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-overlays-modal--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-modal"><img src="https://img.shields.io/npm/v/@vtmn/css-modal?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_modal"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_modal&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-popover</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/overlays/popover#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/3086dd-popover-beta/b/129609"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-overlays-popover--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-popover"><img src="https://img.shields.io/npm/v/@vtmn/css-popover?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_popover"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_popover&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-snackbar</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/overlays/snackbar#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/798580-snackbar-beta/b/129609"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-overlays-snackbar--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-snackbar"><img src="https://img.shields.io/npm/v/@vtmn/css-snackbar?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_snackbar"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_snackbar&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-toast</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/overlays/toast#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/4450b2-toast-beta/b/129609"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-overlays-toast--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-toast"><img src="https://img.shields.io/npm/v/@vtmn/css-toast?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_toast"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_toast&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-tooltip</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/overlays/tooltip#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/595266-tooltip-beta/b/97ce1d"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-overlays-tooltip--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-tooltip"><img src="https://img.shields.io/npm/v/@vtmn/css-tooltip?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_tooltip"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_tooltip&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>

  <h4>Selection controls</h4>

  <table>
    <tr>
      <th>@vtmn/css-checkbox</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/selection-controls/checkbox#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/953c37-checkbox"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-selection-controls-checkbox--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-checkbox"><img src="https://img.shields.io/npm/v/@vtmn/css-checkbox?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_checkbox"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_checkbox&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-chip</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/selection-controls/chip#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/953c37-chip"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-selection-controls-chip--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-chip"><img src="https://img.shields.io/npm/v/@vtmn/css-chip?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_chip"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_chip&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-quantity</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/selection-controls/quantity#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/v/0/p/207abd-quantity-beta/b/75bea6"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-selection-controls-quantity--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-quantity"><img src="https://img.shields.io/npm/v/@vtmn/css-quantity?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_quantity"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_quantity&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-radio-button</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/selection-controls/radio-button#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/31e934-radio-button"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-selection-controls-radio-button--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-radio-button"><img src="https://img.shields.io/npm/v/@vtmn/css-radio-button?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_radio-button"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_radio-button&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-toggle</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/selection-controls/toggle#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/99628d-toggle"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-selection-controls-toggle--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-toggle"><img src="https://img.shields.io/npm/v/@vtmn/css-toggle?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_toggle"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_toggle&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>

  <h4>Structure</h4>

  <table>
    <tr>
      <th>@vtmn/css-accordion</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/structure/accordion#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/v/0/p/04348b-accordion-beta"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-structure-accordion--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-accordion"><img src="https://img.shields.io/npm/v/@vtmn/css-accordion?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_accordion"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_accordion&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-card</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/structure/card#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/88fc2b-card-beta/b/51e109"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-structure-card--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-card"><img src="https://img.shields.io/npm/v/@vtmn/css-card?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_card"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_card&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-divider</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/structure/divider#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/28ad9b-divider-beta/b/75bea6"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-structure-divider--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-divider"><img src="https://img.shields.io/npm/v/@vtmn/css-divider?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_divider"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_divider&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-list</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/structure/list#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/078570-list-beta/b/9115e7"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-structure-list--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-list"><img src="https://img.shields.io/npm/v/@vtmn/css-list?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_list"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_list&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
    <tr>
      <th>@vtmn/css-skeleton</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/components/structure/skeleton#readme">README</a></td>
      <td><a href="https://www.decathlon.design/726f8c765/p/79685a-skeleton-beta/b/122d98"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-structure-skeleton--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-skeleton"><img src="https://img.shields.io/npm/v/@vtmn/css-skeleton?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/project/overview?id=decathlon_vitamin-web_css_components_skeleton"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_components_skeleton&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>
 </details>

<details>
  <summary>For utilities</summary>

  <table>
    <tr>
      <th>@vtmn/css-utilities</th>
      <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/css/src/utilities#readme">README</a></td>
      <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/index.html?path=/docs/guidelines-typography--overview"><img src="https://img.shields.io/badge/storybook-css-d891bc?style=flat&logo=storybook" alt="storybook" /></a></td>
      <td><a href="https://www.npmjs.com/package/@vtmn/css-utilities"><img src="https://img.shields.io/npm/v/@vtmn/css-utilities?style=flat&logo=npm" alt="npm version" /></a></td>
      <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_css_utilities"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_css_utilities&metric=alert_status" alt="Quality Gate Status" /></a></td>
    </tr>
  </table>
</details>

### Icons ✨

This package provides you with a library of SVG icons that you can include in a handful of ways _(SVGs, icon font, sprite, CSS, embedded)_:

<table>
  <tr>
    <th>@vtmn/icons</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/icons#readme">README</a></td>
    <td><a href="https://www.decathlon.design/726f8c765/p/91dc94-iconography"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-icons"><img src="https://img.shields.io/badge/storybook-icons-295573?style=flat&logo=storybook" alt="storybook" /></a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/icons"><img src="https://img.shields.io/npm/v/@vtmn/icons?style=flat&logo=npm" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_icons"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_icons&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

### Assets 🏞

This package provides you with a library of SVG assets that you can include in a handful of ways _(SVGs, asset font, sprite, CSS, embedded)_:

<table>
  <tr>
    <th>@vtmn/assets</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/assets#readme">README</a></td>
    <td><a href="https://www.decathlon.design/726f8c765/p/895daa-assets"><img src="https://img.shields.io/badge/decathlon.design-docs-007dbc" alt="documentation" /></a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/assets"><img src="https://img.shields.io/npm/v/@vtmn/assets?style=flat&logo=npm" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_assets"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_assets&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

## Community packages

In order to enhance your Developer eXperience, we give you the possibility to develop your components in React, Svelte and Vue based on our core packages just above. These libraries are developed and maintained by the community, the Vitamin core team will be there to review, and ensure the quality of your propositions, feel free to contribute!

### React 🔵

This package provides you with a library of [React](https://reactjs.org/) components:

<table>
  <tr>
    <th>@vtmn/react</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/react#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-react"><img src="https://img.shields.io/badge/storybook-react-61DAFB?style=flat&logo=storybook" alt="storybook" /></a></a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/react"><img src="https://img.shields.io/npm/v/@vtmn/react?style=flat&logo=npm" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_react"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_react&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

### Svelte 🟠

This package provides you with a library of [Svelte](https://svelte.dev/) Components:

<table>
  <tr>
    <th>@vtmn/svelte</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/svelte#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-svelte"><img src="https://img.shields.io/badge/storybook-svelte-F13C03?style=flat&logo=storybook" alt="storybook" /></a></a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/svelte"><img src="https://img.shields.io/npm/v/@vtmn/svelte?style=flat&logo=npm" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_svelte"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_svelte&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

### Vue 🟢

This package provides you with a library of [Vue](https://vuejs.org/) components:

<table>
  <tr>
    <th>@vtmn/vue</th>
    <td><a href="https://github.com/Decathlon/vitamin-web/tree/main/packages/sources/vue#readme">README</a></td>
    <td><a href="https://decathlon.github.io/vitamin-web/@vtmn/showcase-vue"><img src="https://img.shields.io/badge/storybook-vue-41B883?style=flat&logo=storybook" alt="storybook" /></a></a></td>
    <td><a href="https://www.npmjs.com/package/@vtmn/vue"><img src="https://img.shields.io/npm/v/@vtmn/vue?style=flat&logo=npm" alt="npm version" /></a></td>
    <td><a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_vue"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_vue&metric=alert_status" alt="Quality Gate Status" /></a></td>
  </tr>
</table>

## Contributing

One of the Decathlon Design System goals is to provide guidelines & components to gain in consistency, efficiency & accessibility. The best way to achieve this is together!
That's why we are on GitHub. We would love contributions from the community _(bug reports, feature requests, suggestions, Pull Requests, whatever you want!)_.

[Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) and [nx](https://nx.dev) are used to manage dependencies and build config across package. [Lerna](https://github.com/lerna/lerna/) is used to manage versioning & publishing.

Run the following to setup your local dev environment:

```sh
# Install `yarn`, alternatives at https://yarnpkg.com/en/docs/install
brew install yarn

# Clone or fork `vitamin-web`
git clone git@github.com:Decathlon/vitamin-web.git # or your fork
cd vitamin-web

# install dependencies
yarn

# build all packages
yarn build

# start all showcases and build sources in watch mode & hot reload
yarn start
# or you can launch separately (recommended)
yarn start:css
yarn start:icons
yarn start:react
yarn start:svelte
yarn start:vue
```

> 👉 See [the contributing docs](CONTRIBUTING.md) for more information about how to contribute.

## Special thanks

Thank you to the [contributors](CONTRIBUTORS.md) involved in these vitamin-web libraries _(even before they were Open Source)_. 💙

<a href="https://github.com/decathlon/vitamin-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=decathlon/vitamin-web" />
</a>

Thank you also [Remix Icon](https://remixicon.com) because Vitamix Icons is the official Decathlon icon library based on their [open-source icon library](https://github.com/Remix-Design/RemixIcon) (Remix Design © 2020). This original library is under the license Apache 2.0 and has been modified by Decathlon. [Learn more](https://www.decathlon.design/726f8c765/p/58575f-vitamix-license).

## License

    Copyright 2021 Decathlon.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
