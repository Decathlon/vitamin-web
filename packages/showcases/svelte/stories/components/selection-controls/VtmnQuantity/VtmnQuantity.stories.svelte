<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { action } from '@storybook/addon-actions';
  import { VtmnQuantity } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/selection-controls/quantity.csf';
  let error;
</script>

<Meta
  title="Components / Selection controls / VtmnQuantity"
  component={VtmnQuantity}
  {parameters}
  {argTypes}
/>

<Template let:args>
  <VtmnQuantity
    {...args}
    {error}
    on:add={action('add')}
    on:subtract={action('subtract')}
    on:change={({ detail: value }) => {
      if (value < args.min) {
        error = `Quantity must be greater than ${args.min}`;
      } else if (value > args.max) {
        error = `Quantity must be lower than ${args.max}`;
      } else {
        error = '';
      }
    }}
  />
</Template>

<Story name="Overview" />
