import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-button',
  component: 'vtmn-button',
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the button.',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: [
          'primary',
          'primary-reversed',
          'secondary',
          'secondary-reversed',
          'ghost',
          'conversion',
        ],
      },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the button.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'stretched'],
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
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136',
    },
  },
};

const Template = (args) =>
  html`<vtmn-button ...=${spread(args)}>Button</vtmn-button>`;

export const Overview = Template.bind({});
Overview.args = {};
