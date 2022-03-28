<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnChip } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/selection-controls/chip.csf';
  import README from '@vtmn/svelte/src/components/selection-controls/VtmnChip/README.md';
</script>

<Meta
  title="Components / Selection controls / VtmnChip"
  component={VtmnChip}
  parameters={{
    ...parameters,
    readme: {
      sidebar: README,
      readme: README,
    },
  }}
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
    Chip
  </VtmnChip>
</Template>

<Story name="Overview" />
