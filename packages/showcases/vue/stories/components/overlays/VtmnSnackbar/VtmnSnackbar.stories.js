import { ref } from 'vue';
import { VtmnSnackbar, VtmnButton } from '@vtmn/vue';
import {
  parameters,
  argTypes,
} from '@vtmn/showcase-core/csf/components/overlays/snackbar.csf';

const CSS_ANIMATION_TIME_MS = 500;

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
        }, args.timeout + CSS_ANIMATION_TIME_MS);
      },
      args,
    };
  },
  template: `<VtmnButton @click="handleShowSnackbarClick()">Display snackbar</VtmnButton>
  <VtmnSnackbar v-if="showSnackbar" v-bind="args">
    <template v-slot:content>
    This is the content of the snackbar
    </template>
  </VtmnSnackbar>`,
});

export const Overview = Template.bind({});
Overview.args = {};
