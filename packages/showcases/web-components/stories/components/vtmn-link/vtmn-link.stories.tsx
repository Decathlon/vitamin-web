import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/src/components/VtmnLink.csf';

export default {
  title: 'Components/vtmn-link',
  component: 'vtmn-link',
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Link',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
};

const Template = (args) =>
  html`<vtmn-link ...=${spread(args)}>Link</vtmn-link>`;

export const Overview = Template.bind({});
Overview.args = {};
