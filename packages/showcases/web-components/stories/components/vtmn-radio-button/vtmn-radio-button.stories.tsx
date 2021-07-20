import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnRadioButton.csf';

export default {
  title: 'Components/vtmn-radio-button',
  component: 'vtmn-radio-button',
  argTypes,
  parameters,
};

const Template = (args) => html`<vtmn-radio-button ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
