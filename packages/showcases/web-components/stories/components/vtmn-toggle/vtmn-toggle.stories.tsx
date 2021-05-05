import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-toggle',
  component: 'vtmn-toggle',
  argTypes: {
    id: {
      type: { name: 'string', required: true },
      description: 'The id of the toggle and its label.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    label: {
      type: { name: 'string', required: false },
      description: 'The label of the toggle.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the toggle.',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    checked: {
      type: { name: 'boolean', required: false },
      description: 'The checked state of the toggle',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the toggle',
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
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=612%3A1192',
    },
  },
};

const Template = (args) => html`<vtmn-toggle ...=${spread(args)} />`;

export const Overview = Template.bind({});
Overview.args = {};
