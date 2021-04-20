import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/Link',
  component: 'vtmn-link',
  argTypes: {
    isStandalone: {
      type: { name: 'boolean', required: false },
      description: 'Standalone link or not',
      defaultValue: false,
      control: {
        type: 'select',
        options: [true, false],
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
  },
  parameters: {
    backgrounds: { default: 'grey' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=1207%3A8898',
    },
  },
};

const Template = (args) =>
  html`<vtmn-link ...=${spread(args)}>Link</vtmn-link>`;

export const Overview = Template.bind({});
Overview.args = {};
