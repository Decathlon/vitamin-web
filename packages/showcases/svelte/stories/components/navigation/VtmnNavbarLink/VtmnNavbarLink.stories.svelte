<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { parameters } from '@vtmn/showcase-core/csf/components/navigation/navbar-link.csf';
  import vitamixIcons from '@vtmn/icons/dist/vitamix/font/vitamix.json';
  import { VtmnNavbarLink, VtmnBadge } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Navigation / VtmnNavbarLink"
  component={VtmnNavbarLink}
  argTypes={{
    icon: {
      control: 'select',
      options: ['', ...Object.keys(vitamixIcons)],
    },
  }}
  {parameters}
/>

<Story name="Overview" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnNavbarLink href="#" icon="question-line" {...args}>
      <span>Contact us</span>
    </VtmnNavbarLink>
  </div>
</Story>

<Story name="With badge" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnNavbarLink href="#" icon="shopping-cart-line" {...args}>
      <VtmnBadge slot="badge" value={3} variant="accent" />
      <span>Cart</span>
    </VtmnNavbarLink>
  </div>
</Story>

<Story name="Hide label" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnNavbarLink href="#" icon="question-line" {...args}>
      <span class="vtmn-sr-only">Contact us</span>
    </VtmnNavbarLink>
  </div>
</Story>

<Story name="Hide label with badge" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnNavbarLink href="#" icon="shopping-cart-line" {...args}>
      <VtmnBadge slot="badge" value={3} variant="accent" />
      <span class="vtmn-sr-only">Cart</span>
    </VtmnNavbarLink>
  </div>
</Story>
