import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/vtmn-link',
  component: 'vtmn-link',
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      description: 'The hypertext link of the link.',
      defaultValue: '#',
      control: {
        type: 'text',
      },
    },
    target: {
      type: { name: 'string', required: false },
      description: 'The target of the link.',
      defaultValue: '_blank',
      control: {
        type: 'text',
      },
    },
    standalone: {
      type: { name: 'boolean', required: false },
      description: 'Standalone link or not',
      defaultValue: false,
      control: {
        type: 'boolean',
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
    backgrounds: { default: 'white' },
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
  html`<vtmn-link ...=${spread(args)}>Your link</vtmn-link>`;

export const Overview = Template.bind({});
Overview.args = {};
