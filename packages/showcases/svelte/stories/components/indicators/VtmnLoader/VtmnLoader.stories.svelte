<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnLoader } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/indicators/loader.csf';
</script>

<Meta
  title="Components / Indicators / VtmnLoader"
  component={VtmnLoader}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnLoader {...args} />
</Template>

<Story name="Overview" />
