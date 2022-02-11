<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnPrice } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

  const priceArgs = {
    id: 'my-price',
    labelText: 'Label',
    size: 'medium',
    variant: 'default',
  };
</script>

<Meta
  title="Components / Indicators / VtmnPrice"
  component={VtmnPrice}
  {parameters}
/>

<Template let:args>
  <VtmnPrice {...args}>250,00€</VtmnPrice>
</Template>

<Story name="Overview" args={priceArgs} />
