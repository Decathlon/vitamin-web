<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnBadge } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/indicators/badge.csf';
</script>

<Meta
  title="Components / Indicators / VtmnBadge"
  component={VtmnBadge}
  {...argTypes}
  {...parameters}
/>

<Template let:args>
  <VtmnBadge {...args} />
</Template>

<Story
  name="Playground"
  args={{
    variant: 'default',
    value: 6,
  }}
/>
