<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnCheckbox } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/selection-controls/checkbox.csf';

  const checkboxArgs = {
    id: 'My checkbox',
    label: 'Label',
    indeterminate: false,
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
  <VtmnCheckbox
    id={args.id}
    indeterminate={args.indeterminate}
    checked={args.checked}
    disabled={args.disabled}
  >
    <svelte:fragment>{args.label}</svelte:fragment>
  </VtmnCheckbox>
</Template>

<Story name="Overview" args={checkboxArgs} />
