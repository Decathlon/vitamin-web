<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnChip } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/selection-controls/chip.csf';
</script>

<Meta
  title="Components / Selection controls / VtmnChip"
  component={VtmnChip}
  {parameters}
  {argTypes}
/>

<Template let:args>
  <VtmnChip
    {...args}
    on:click={() => {
      console.log('on:click');
    }}
    on:cancel={() => {
      console.log('on:cancel');
    }}
  >
    {args.children}
  </VtmnChip>
</Template>

<Story name="Overview" />
