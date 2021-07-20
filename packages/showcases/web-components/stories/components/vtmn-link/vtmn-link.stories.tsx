import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnLink.csf';

export default {
  title: 'Components/vtmn-link',
  component: 'vtmn-link',
  argTypes,
  parameters,
};

const Template = (args) =>
  html`<vtmn-link ...=${spread(args)}>Link</vtmn-link>`;

export const Overview = Template.bind({});
Overview.args = {};
