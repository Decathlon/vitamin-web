import { ref } from 'vue';
import { VtmnAlert, VtmnButton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/alert.csf';

const CSS_ANIMATION_TIME_MS = 700;

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
        }, args.timeout + CSS_ANIMATION_TIME_MS);
      },
      args,
    };
  },
  template: `<VtmnButton @click="handleShowAlertClick()">Display alert</VtmnButton><VtmnAlert v-if="showAlert" v-bind="args" />`,
});

export const Overview = Template.bind({});
Overview.args = {};

const AlertItemTemplate = (args) => ({
  components: { VtmnAlert },
  setup() {
    return {
      args,
    };
  },
  template: `<VtmnAlert v-bind="args" />`,
});

export const AlertItem = AlertItemTemplate.bind({});
AlertItem.args = {
  timeout: 0,
};
