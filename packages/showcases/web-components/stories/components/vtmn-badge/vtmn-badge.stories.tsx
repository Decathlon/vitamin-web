import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnBadge.csf';

export default {
  title: 'Components/vtmn-badge',
  component: 'vtmn-badge',
  argTypes,
  parameters,
};

const Template = (args) => html`<vtmn-badge ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
