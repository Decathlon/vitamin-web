import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnSelect';

export default {
  title: 'Components/vtmn-select',
  component: 'vtmn-select',
  argTypes,
  parameters,
};

const Template = (args) => html`<vtmn-select ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
