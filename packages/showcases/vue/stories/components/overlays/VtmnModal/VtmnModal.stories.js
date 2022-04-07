import { ref } from 'vue';
import { VtmnModal, VtmnButton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/modal.csf';

export default {
  title: 'Components / Overlays / VtmnModal',
  component: VtmnModal,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnModal, VtmnButton },
  setup() {
    let showModal = ref(false);

    return {
      showModal,
      handleShowModalClick: () => {
        showModal.value = true;
      },
      args,
    };
  },
  template: `
  <VtmnButton @click="handleShowModalClick()">Display modal</VtmnButton>
  <VtmnModal v-bind="args" :open="showModal">
    <template v-slot:title>
      This is the title
    </template>
    
    <template v-slot:description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
        assumenda? Asperiores rem nulla odit saepe dolores molestias
        exercitationem accusamus perferendis est aut repudiandae optio vel dicta
        reprehenderit ad, repellendus officiis cumque omnis labore in quia? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Numquam, assumenda?
        Asperiores rem nulla odit saepe dolores molestias exercitationem accusamus
        perferendis est aut repudiandae optio vel dicta reprehenderit ad,
        repellendus officiis cumque omnis labore in quia? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Numquam, assumenda? Asperiores rem
        nulla odit saepe dolores molestias exercitationem accusamus perferendis
        est aut repudiandae optio vel dicta reprehenderit ad, repellendus officiis
        cumque omnis labore in quia? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Numquam, assumenda? Asperiores rem nulla odit saepe
        dolores molestias exercitationem accusamus perferendis est aut repudiandae
        optio vel dicta reprehenderit ad, repellendus officiis cumque omnis labore
        in quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </template>
    
    <template v-slot:actions>
      <VtmnButton variant="secondary">Action 1</VtmnButton>
      <VtmnButton variant="primary">Action 2</VtmnButton>
    </template>
  </VtmnModal>`,
});

export const Overview = Template.bind({});
Overview.args = {};
