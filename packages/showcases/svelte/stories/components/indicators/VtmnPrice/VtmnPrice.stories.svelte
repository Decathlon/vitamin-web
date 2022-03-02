<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnPrice } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

  const priceArgs = {
    size: 'medium',
    variant: 'default',
  };
</script>

<Meta
  title="Components / Indicators / VtmnPrice"
  component={VtmnPrice}
  argTypes={{
    slot: {
      control: 'text',
      description: 'Content of the slot',
      defaultValue: '250,00€',
    },
  }}
  {parameters}
/>

<Template let:args>
  <VtmnPrice {...args}>{args.slot}</VtmnPrice>
</Template>

<Story name="Overview" args={priceArgs} />
