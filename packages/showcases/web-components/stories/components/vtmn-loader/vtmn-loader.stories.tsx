import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnLoader.csf';

export default {
  title: 'Components/vtmn-loader',
  component: 'vtmn-loader',
  argTypes,
  parameters,
};

const Template = (args) => html`<vtmn-loader ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
