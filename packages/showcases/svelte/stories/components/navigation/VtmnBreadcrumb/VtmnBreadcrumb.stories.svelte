<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnBreadcrumb, VtmnBreadcrumbItem } from '@vtmn/svelte';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/navigation/breadcrumb.csf';
</script>

<Meta
  title="Components / Navigation / VtmnBreadcrumb"
  component={VtmnBreadcrumb}
  {parameters}
  {argTypes}
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
    <VtmnBreadcrumbItem icon="shirt-line" aria-label="Current page title"
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
