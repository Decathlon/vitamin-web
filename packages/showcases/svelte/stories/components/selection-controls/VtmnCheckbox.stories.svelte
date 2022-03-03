<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnCheckbox } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/selection-controls/checkbox.csf';

  const checkboxArgs = {
    id: 'my-checkbox',
    slot: 'Label',
    checked: false,
    disabled: false,
  };
</script>

<Meta
  title="Components / Selection controls / VtmnCheckbox"
  component={VtmnCheckbox}
  {parameters}
/>

<Template let:args>
  <VtmnCheckbox {...args}>
    {args.slot}
  </VtmnCheckbox>
</Template>

<Story name="Overview" args={checkboxArgs} />
