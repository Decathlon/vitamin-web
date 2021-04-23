import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/Text-input',
  component: 'vtmn-text-input',
  argTypes: {
    state: {
      type: { name: 'string', required: false },
      description: 'The state of the text input.',
      defaultValue: '',
      control: {
        type: 'select',
        options: ['valid', 'error', 'disabled', ''],
      },
    },
    icon: {
      type: { name: 'boolean', required: false },
      description: 'Icon displayed or not',
      defaultValue: false,
      control: {
        type: 'select',
        options: [true, false],
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
