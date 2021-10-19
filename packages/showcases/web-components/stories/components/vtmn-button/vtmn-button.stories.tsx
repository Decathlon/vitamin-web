import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import { argTypes, parameters } from './vtmn-button.csf';

export default {
  title: 'Components/vtmn-button',
  component: 'vtmn-button',
  argTypes,
  parameters,
};

const Template = (args) =>
  html`<vtmn-button ...=${spread(args)}>Button</vtmn-button>`;

export const Overview = Template.bind({});
Overview.args = {};
