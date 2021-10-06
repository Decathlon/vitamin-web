import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnSelect.csf';

export default {
  title: 'Components/vtmn-select',
  component: 'vtmn-select',
  argTypes,
  parameters,
};

const Template = (args) =>
  html`<vtmn-select ...=${spread(args)}>
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
    <option value="option-4">Option 4</option>
  </vtmn-select>`;

export const Overview = Template.bind({});
Overview.args = {};
