<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnTag } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/indicators/badge.csf';
</script>

<Meta
  title="Components / Indicators / VtmnTag"
  component={VtmnTag}
  {...argTypes}
  {...parameters}
/>

<Template let:args>
  <VtmnTag {...args} />
</Template>

<Story name="Overview" />
