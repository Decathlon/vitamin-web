// import { withKnobs } from "@storybook/addon-knobs";
// import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
// import "@vtmn/web-components/dist/vitamin-wc-button/vitamin-wc-button.esm";

export default {
  title: 'Button',
  component: 'vtmn-button',
};

export const Default = () => {
  return html` <vtmn-button>Hello Web Component !!!</vtmn-button> `;
};
