<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnTag, VtmnIcon } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/indicators/tag.csf';
</script>

<Meta
  title="Components / Indicators / VtmnTag"
  component={VtmnTag}
  argTypes={{
    ...argTypes,
    slot: {
      control: 'text',
      description: 'Content of the slot',
      defaultValue: 'Tag',
    },
  }}
  {parameters}
/>

<Template let:args>
  <VtmnTag {...args}>{args.slot}</VtmnTag>
</Template>

<Story name="Overview" args={{ variant: 'accent' }} />
