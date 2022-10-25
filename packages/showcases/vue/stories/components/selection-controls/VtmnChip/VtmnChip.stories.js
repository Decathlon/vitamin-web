import { VtmnChip } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/chip.csf';

export default {
  title: 'Components / Selection controls / VtmnChip',
  component: VtmnChip,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnChip },

  setup() {
    return {
      args,
      handleCancel: () => {
        console.log('cancel');
      },
    };
  },
  template: `<VtmnChip @cancel="handleCancel()" v-bind="args">Chip</VtmnChip>`,
});

export const Overview = Template.bind({});
Overview.args = {};
