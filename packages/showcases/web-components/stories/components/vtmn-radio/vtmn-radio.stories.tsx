import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-radio',
  component: 'vtmn-radio',
  argTypes: {
    idText: {
      type: { name: 'string', required: true },
      description: 'The id of the radio and its label.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    labelText: {
      type: { name: 'string', required: true },
      description: 'The label of the radio.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    nameText: {
      type: { name: 'string', required: true },
      description: 'The name of the radio.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    valueText: {
      type: { name: 'string', required: false },
      description: 'The value of the radio.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    checked: {
      type: { name: 'boolean', required: false },
      description: 'The checked state of the radio',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the radio',
      defaultValue: null,
      control: {
        type: 'boolean',
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
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=359%3A30',
    },
  },
};

const Template = (args) => html`<vtmn-radio ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
