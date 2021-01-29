// import { withKnobs } from "@storybook/addon-knobs";
// import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
// import "@decathlon/vitamin-wc-button/dist/vitamin-wc-button/vitamin-wc-button.esm";

export default {
  title: 'Button',
  component: 'vtmn-button',
  // decorators: [withKnobs, withA11y]
};

export const Default = () => {
  // const first = text("First", "Jag");
  // const last = text("Last", "Reehal");
  return html` <vtmn-button>Hello Web Component !!!</vtmn-button> `;
};
