import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnCheckbox.csf';

export default {
  title: 'Components/vtmn-checkbox',
  component: 'vtmn-checkbox',
  argTypes,
  parameters,
};

const Template = (args) => html`<vtmn-checkbox ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
