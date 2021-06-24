import { VtmnLink } from '@vtmn/vue/dist/esm/VtmnLink';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/src/components/VtmnLink.csf';

export default {
  title: 'Components/VtmnLink',
  component: VtmnLink,
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

const Template = (args) => ({
  components: { VtmnLink },
  setup() {
    return { args };
  },
  template: '<VtmnLink v-bind="args">Link</VtmnLink>',
});

export const Overview = Template.bind({});
Overview.args = {};
