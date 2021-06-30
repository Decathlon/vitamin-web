import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export default {
  title: 'Components/vtmn-text-input',
  component: 'vtmn-text-input',
  argTypes: {
    identifier: {
      type: { name: 'string', required: true },
      description: 'Id of the text input',
      defaultValue: null,
      control: {
        type: 'my-text-input',
      },
    },
    labelText: {
      type: { name: 'string', required: true },
      description: 'The label of the text input',
      defaultValue: 'My label',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      type: { name: 'string', required: true },
      description: 'The placeholder of the text input',
      defaultValue: 'My placeholder',
      control: {
        type: 'text',
      },
    },
    helperText: {
      type: { name: 'string', required: true },
      description: 'The helper of the text input',
      defaultValue: 'My helper',
      control: {
        type: 'text',
      },
    },
    multiline: {
      type: { name: 'boolean', required: false },
      description: 'Whether the text input is multiline or not.',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
    valid: {
      type: { name: 'boolean', required: false },
      description: 'The valid state of the text input.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    error: {
      type: { name: 'boolean', required: false },
      description: 'The error state of the text input.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
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
        type: 'select',
        options: ['', ...Object.keys(vitamixIconsList)],
      },
    },
  },
  parameters: {
    backgrounds: { default: 'grey' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=150%3A4893',
    },
  },
};

const Template = (args) =>
  html`<vtmn-text-input ...=${spread(args)}></vtmn-text-input>`;

export const Overview = Template.bind({});
Overview.args = {};
