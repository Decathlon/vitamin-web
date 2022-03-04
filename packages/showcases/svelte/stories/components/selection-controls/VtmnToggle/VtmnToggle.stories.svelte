<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnToggle } from '@vtmn/svelte';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/selection-controls/toggle.csf';

  delete argTypes.identifier;
</script>

<Meta
  title="Components / Selection controls / VtmnToggle"
  component={VtmnToggle}
  {parameters}
  argTypes={{
    ...argTypes,
    id: {
      type: { name: 'string', required: true },
      description: 'The id of the toggle.',
      defaultValue: 'my-toggle',
      control: {
        type: 'text',
      },
    },
    labelText: {
      type: { name: 'string', required: false },
      description: 'The label of the toggle.',
      defaultValue: 'My label',
      control: {
        type: 'text',
      },
    },
    checked: {
      type: { name: 'boolean', required: false },
      description: 'Define if toogle is checked or not',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  }}
/>

<Template let:args>
  <VtmnToggle {...args}>
    {args.labelText}
  </VtmnToggle>
</Template>

<Story name="Overview" />
