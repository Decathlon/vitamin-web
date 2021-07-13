import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-badge',
  component: 'vtmn-badge',
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the badge.',
      defaultValue: '',
      control: {
        type: 'select',
        options: ['default', 'brand', 'reversed', 'accent'],
      },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the badge.',
      defaultValue: '',
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    value: {
      type: { name: 'string', required: false },
      description: 'The value in the badge.',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    backgrounds: { default: 'white' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2603%3A9428',
    },
  },
};

const Template = (args) => html`<vtmn-badge ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
