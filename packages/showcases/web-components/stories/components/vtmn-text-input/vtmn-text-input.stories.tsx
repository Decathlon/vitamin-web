import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnTextInput.csf';

export default {
  title: 'Components/vtmn-text-input',
  component: 'vtmn-text-input',
  argTypes,
  parameters,
};

const Template = (args) =>
  html`<vtmn-text-input ...=${spread(args)}></vtmn-text-input>`;

export const Overview = Template.bind({});
Overview.args = {};
