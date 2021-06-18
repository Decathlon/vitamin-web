import { VtmnLink } from '@vtmn/vue/dist/esm/VtmnLink';

export default {
  title: 'Components/VtmnLink',
  component: VtmnLink,
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      description: 'The href of the link.',
      defaultValue: '#',
      control: { type: 'text' },
    },
    target: {
      type: { name: 'string', required: false },
      description: 'The target of the link.',
      defaultValue: '_self',
      control: {
        type: 'text',
      },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the link.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    standalone: {
      type: { name: 'boolean', required: false },
      description: 'If the component is a standalone or not.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    iconAlong: {
      type: { name: 'boolean', required: false },
      description: 'If the component has an icon along or not.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  parameters: {
    backgrounds: { default: 'white' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136',
    },
  },
};

const Template = (args) => ({
  components: { VtmnLink },
  setup() {
    return { args };
  },
  template: '<VtmnLink v-bind="args">My link</VtmnLink>',
});

export const Overview = Template.bind({});
Overview.args = {};
