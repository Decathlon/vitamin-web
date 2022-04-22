<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnBreadcrumb, VtmnBreadcrumbItem } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Navigation / VtmnBreadcrumb"
  component={VtmnBreadcrumb}
/>

<Story name="Overview" let:args>
  <VtmnBreadcrumb {...args} aria-label="Breadcrumb 1">
    <VtmnBreadcrumbItem href="#">Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem href="#">Page 2</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem aria-current="page">Current</VtmnBreadcrumbItem>
  </VtmnBreadcrumb>
</Story>

<Story name="With icons" let:args>
  <VtmnBreadcrumb {...args} aria-label="Breadcrumb 2">
    <VtmnBreadcrumbItem icon="home-line" href="#">Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="store-line" href="#">Store</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="gift-line" href="#">New</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="user-line" href="#">Children</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="t-shirt-line" aria-current="page"
      >Tee-shirt</VtmnBreadcrumbItem
    >
  </VtmnBreadcrumb>
</Story>

<Story name="With custom link" let:args>
  <VtmnBreadcrumb {...args} aria-label="Breadcrumb 3">
    <VtmnBreadcrumbItem icon="home" href="#">Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem><button>...</button></VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem aria-current="page">Tee-shirt</VtmnBreadcrumbItem>
  </VtmnBreadcrumb>
</Story>
