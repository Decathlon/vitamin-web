import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnProgressBar.csf';

export default {
  title: 'Components/vtmn-progressbar',
  component: 'vtmn-progressbar',
  argTypes,
  parameters,
};

const Template = (args) => html`<vtmn-progressbar ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
