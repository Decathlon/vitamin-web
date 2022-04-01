import { ref } from 'vue';
import { VtmnAlert, VtmnButton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/alert.csf';

export default {
  title: 'Components / Overlays / VtmnAlert',
  component: VtmnAlert,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnAlert, VtmnButton },
  setup() {
    let showAlert = ref(false);

    return {
      showAlert,
      handleShowAlertClick: () => {
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 8000);
      },
      args,
    };
  },
  template: `<VtmnButton @click="handleShowAlertClick()">Display alert</VtmnButton><VtmnAlert v-if="showAlert" v-bind="args" />`,
});

export const Overview = Template.bind({});
Overview.args = {};
