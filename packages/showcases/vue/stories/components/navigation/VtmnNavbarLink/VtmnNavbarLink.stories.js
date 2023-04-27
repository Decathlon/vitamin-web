import { VtmnNavbarLink, VtmnBadge } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/navbar-link.csf';

export default {
  title: 'Components / Navigation / VtmnNavbarLink',
  component: VtmnNavbarLink,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnNavbarLink, VtmnBadge },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center">
    <VtmnNavbarLink href="#" icon="shopping-cart-line" label="Cart" v-bind="args">
      <VtmnBadge slot="badge" value="3" variant="accent" />
      <span>Cart</span>
    </VtmnNavbarLink>
    </div>`,
});

const TemplateHidden = (args) => ({
  components: { VtmnNavbarLink, VtmnBadge },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center">
    <VtmnNavbarLink href="#" icon="shopping-cart-line" label="Cart" v-bind="args">
      <VtmnBadge slot="badge" value="3" variant="accent" />
      <span class="vtmn-sr-only">Cart</span>
    </VtmnNavbarLink>
    </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};

export const Hidden = TemplateHidden.bind({});
Hidden.args = {};
