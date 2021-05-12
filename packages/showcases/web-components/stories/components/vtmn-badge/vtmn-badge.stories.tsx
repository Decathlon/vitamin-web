import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-badge',
  component: 'vtmn-badge',
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the button.',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['default', 'brand', 'reversed', 'accent', null],
      },
    },
    labelText: {
      type: { name: 'string', required: false },
      description: 'The label of the badge',
      control: {
        type: 'text',
      },
    },
    value: {
      type: { name: 'number', required: false },
      description: 'The value of the badge',
      defaultValue: 8,
      control: {
        type: 'number',
      },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the badge.',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    icon: {
      type: { name: 'string', required: false },
      description: 'Icon font of the badge',
      defaultValue: 'vtmx-notification-line',
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
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=1450%3A8683',
    },
  },
};

const Template = (args) => html`<vtmn-badge ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
