import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/Toggle',
  component: 'vtmn-toggle',
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the toggle.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium'],
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

const Template = (args) =>
  html`<vtmn-toggle ...=${spread(args)}>Your label</vtmn-toggle>`;

export const Overview = Template.bind({});
Overview.args = {};
