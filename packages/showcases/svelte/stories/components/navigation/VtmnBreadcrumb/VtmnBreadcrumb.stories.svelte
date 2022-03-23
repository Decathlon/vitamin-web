<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnBreadcrumb } from '@vtmn/svelte';
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

<Template let:args>
  <VtmnBreadcrumb {...args} />
</Template>

<Story name="Overview" let:args>
  <div class="block">
    <nav aria-label="Breadcrumb" class="vtmn-breadcrumb">
      <ol>
        <VtmnBreadcrumb {...args} />
        <VtmnBreadcrumb item="Store" href="Store" icon="vtmx-store-line" />
        <VtmnBreadcrumb item="Page 2" href="Page 2" />
      </ol>
    </nav>
  </div>
</Story>
