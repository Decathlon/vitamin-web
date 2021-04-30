import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-text-input',
  component: 'vtmn-text-input',
  argTypes: {
    state: {
      type: { name: 'string', required: false },
      description: 'The state of the text input.',
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['valid', 'error', 'default'],
      },
    },
    isDisabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the text input.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    icon: {
      type: { name: 'string', required: false },
      description: 'Icon font to be displayed',
      defaultValue: null,
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
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=150%3A4893',
    },
  },
};

const Template = (args) =>
  html`<vtmn-text-input ...=${spread(args)}>Your label</vtmn-text-input>`;

export const Overview = Template.bind({});
Overview.args = {};
