<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnBreadcrumb, VtmnBreadcrumbItem } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Navigation / VtmnBreadcrumbItem"
  component={VtmnBreadcrumbItem}
  argTypes={{
    href: {
      description: 'href',
      defaultValue: '#',
    },
    icon: {
      description: 'icon',
      defaultValue: 'home-line',
    },
  }}
/>

<Story name="Overview" let:args>
  <VtmnBreadcrumb>
    <VtmnBreadcrumbItem {...args}>Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem aria-label="Current page title"
      >Current</VtmnBreadcrumbItem
    >
  </VtmnBreadcrumb>
</Story>

<Story name="With icons" let:args>
  <VtmnBreadcrumb>
    <VtmnBreadcrumbItem {...args}>Children</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem {...args} aria-label="Current page title"
      >Tee-shirt</VtmnBreadcrumbItem
    >
  </VtmnBreadcrumb>
</Story>

<Story name="With custom link" let:args>
  <VtmnBreadcrumb>
    <VtmnBreadcrumbItem icon="home-line" href="#">Home</VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem><button>...</button></VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="shirt-line" aria-label="Current page title"
      >Tee-shirt</VtmnBreadcrumbItem
    >
  </VtmnBreadcrumb>
</Story>
