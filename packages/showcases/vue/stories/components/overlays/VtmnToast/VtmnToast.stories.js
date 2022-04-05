import { ref } from 'vue';
import { VtmnToast, VtmnButton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/toast.csf';

export default {
  title: 'Components / Overlays / VtmnToast',
  component: VtmnToast,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnToast, VtmnButton },
  setup() {
    let showToast = ref(false);

    return {
      showToast,
      handleShowToastClick: () => {
        showToast.value = true;
        setTimeout(() => {
          showToast.value = false;
        }, 8000);
      },
      args,
    };
  },
  template: `<VtmnButton @click="handleShowToastClick()">Display toast</VtmnButton>
  <VtmnToast v-if="showToast" v-bind="args">
    <template v-slot:content>
      This is the content of the toast component
    </template>
  </VtmnToast>`,
});

export const Overview = Template.bind({});
Overview.args = {};
