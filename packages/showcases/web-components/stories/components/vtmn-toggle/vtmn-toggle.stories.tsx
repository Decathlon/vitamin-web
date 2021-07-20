import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnToggle.csf';

export default {
  title: 'Components/vtmn-toggle',
  component: 'vtmn-toggle',
  argTypes,
  parameters,
};

const Template = (args) => html`<vtmn-toggle ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
