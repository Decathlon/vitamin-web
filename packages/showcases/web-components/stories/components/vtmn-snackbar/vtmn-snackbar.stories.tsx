import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnSnackbar.csf';

export default {
  title: 'Components/vtmn-snackbar',
  component: 'vtmn-snackbar',
  argTypes,
  parameters,
};

const Template = (args) =>
  html`<vtmn-snackbar ...=${spread(args)}
    >This is the description of a snackbar</vtmn-snackbar
  >`;

export const Overview = Template.bind({});
Overview.args = {};
