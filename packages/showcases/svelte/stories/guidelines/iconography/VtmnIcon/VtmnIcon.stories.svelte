<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnIcon } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/guidelines/iconography.csf';
</script>

<Meta
  title="Guidelines / Iconography / VtmnIcon"
  component={VtmnIcon}
  argTypes={{
    ...argTypes,
    color: undefined,
  }}
  {...parameters}
/>

<Template let:args>
  <VtmnIcon {...args} />
</Template>

<Story name="Overview" />
