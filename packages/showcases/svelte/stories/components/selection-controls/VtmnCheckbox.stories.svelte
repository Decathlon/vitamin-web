<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnCheckbox } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/selection-controls/checkbox.csf';

  const checkboxArgs = {
    id: 'My checkbox',
    label: 'This is the label of the checkbox',
    disabled: false,
  };
</script>

<Meta
  title="Components / Selection controls / VtmnCheckbox"
  component={VtmnCheckbox}
  {parameters}
/>

<Template let:args>
  <VtmnCheckbox label={args.label} id={args.id} disabled={args.disabled} />
</Template>

<Story name="Overview" args={checkboxArgs} />
