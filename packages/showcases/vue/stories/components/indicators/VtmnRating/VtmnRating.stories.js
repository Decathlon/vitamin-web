import { VtmnRating } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/rating.csf';

export default {
  title: 'Components / Indicators / VtmnRating',
  component: VtmnRating,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnRating },
  setup() {
    return { args };
  },
  template: `<VtmnRating v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
