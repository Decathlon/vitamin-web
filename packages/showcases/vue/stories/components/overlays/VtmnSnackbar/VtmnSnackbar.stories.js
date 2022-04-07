import { ref } from 'vue';
import { VtmnSnackbar, VtmnButton } from '@vtmn/vue';
import { parameters } from '@vtmn/showcase-core/csf/components/overlays/snackbar.csf';

export default {
  title: 'Components / Overlays / VtmnSnackbar',
  component: VtmnSnackbar,
  argTypes: {
    withCloseButton: {
      type: { name: 'boolean', required: true },
      description: 'Show close button',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    actionLabel: {
      type: { name: 'string', required: false },
      describe: 'Label of the action. If set, it displays action button',
      defaultValue: undefined,
      control: {
        type: 'text',
      },
    },
  },
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
  template: `<VtmnButton @click="handleShowSnackbarClick()">Display snackbar</VtmnButton>
  <VtmnSnackbar v-if="showSnackbar" v-bind="args">
    <template v-slot:content>
    This is the content of the snackbar
    </template>
  </VtmnSnackbar>`,
});

export const Overview = Template.bind({});
Overview.args = {};
