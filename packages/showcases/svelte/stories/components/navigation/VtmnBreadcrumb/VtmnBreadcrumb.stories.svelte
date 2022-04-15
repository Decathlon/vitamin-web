<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnBreadcrumb, VtmnBreadcrumbItem } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Navigation / VtmnBreadcrumb"
  component={VtmnBreadcrumb}
/>

<Story name="Overview" let:args>
  <VtmnBreadcrumb {...args}>
    <VtmnBreadcrumbItem href="#">Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem href="#">Page 2</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem aria-label="Current page title"
      >Current</VtmnBreadcrumbItem
    >
  </VtmnBreadcrumb>
</Story>

<Story name="With icons" let:args>
  <VtmnBreadcrumb {...args}>
    <VtmnBreadcrumbItem icon="home-line" href="#">Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="store-line" href="#">Store</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="gift-line" href="#">New</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="user-line" href="#">Children</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="t-shirt-line" aria-label="Current page title"
      >Tee-shirt</VtmnBreadcrumbItem
    >
  </VtmnBreadcrumb>
</Story>

<Story name="With custom link" let:args>
  <VtmnBreadcrumb {...args}>
    <VtmnBreadcrumbItem icon="home" href="#">Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem><button>...</button></VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem aria-label="Current page title"
      >Tee-shirt</VtmnBreadcrumbItem
    >
  </VtmnBreadcrumb>
</Story>
