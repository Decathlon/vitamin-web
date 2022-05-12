import { VtmnCard, VtmnPrice, VtmnButton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/card.csf';

export default {
  title: 'Components / Structure / VtmnCard',
  component: VtmnCard,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnCard, VtmnPrice, VtmnButton },
  setup() {
    const src =
      'https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg';
    return { args, src };
  },
  template: `<div style="display: flex; justify-content: center; max-width: 300px;">
    <VtmnCard v-bind="args">
      <template #img>
        <img alt="" :src="src" />
      </template>
      <template #content">
        A container for content representing a single entity. e.g. a contact,
        article, or task.
      </template>
      <template #actions">
        <VtmnPrice variant="accent">150,00 €</VtmnPrice>
        <VtmnButton variant="primary" size="stretched">Button</VtmnButton>
      </template>
    </VtmnCard>
  </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
