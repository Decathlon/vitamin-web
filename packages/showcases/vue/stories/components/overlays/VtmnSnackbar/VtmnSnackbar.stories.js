import { ref } from 'vue';
import { VtmnSnackbar, VtmnButton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/snackbar.csf';

export default {
  title: 'Components / Overlays / VtmnSnackbar',
  component: VtmnSnackbar,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnSnackbar, VtmnButton },
  setup() {
    let showSnackbar = ref(false);

    return {
      showSnackbar,
      handleShowSnackbarClick: () => {
        showSnackbar.value = true;
        setTimeout(() => {
          showSnackbar.value = false;
        }, 8000);
      },
      args,
    };
  },
  template: `<VtmnButton @click="handleShowSnackbarClick()">Display snackbar</VtmnButton><VtmnSnackbar v-if="showSnackbar" v-bind="args" />`,
});

export const Overview = Template.bind({});
Overview.args = {};
