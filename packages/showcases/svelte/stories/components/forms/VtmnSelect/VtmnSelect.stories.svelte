<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnSelect } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/forms/select.csf';
  const argTypes = {
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the select.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    error: {
      type: { name: 'string', required: false },
      description: 'The error message displayed under the select.',
      defaultValue: '',
      control: { type: 'text' },
    },
    id: {
      type: { name: 'string', required: true },
      description: 'The id of the select',
      defaultValue: 'vtmn-select',
      control: { type: 'text' },
    },
    name: {
      type: { name: 'string', required: true },
      description: 'The name of the select',
      defaultValue: 'sports',
      control: { type: 'text' },
    },
    label: {
      type: { name: 'string', required: true },
      description: 'The label of the select.',
      defaultValue: 'Label',
      control: { type: 'text' },
    },
    autocomplete: {
      type: { name: 'boolean', required: false },
      description: 'Enable autocompletion on select',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    value: {
      type: { name: 'object', required: true },
      description: 'Selected value',
      defaultValue: '',
      control: { type: 'object' },
    },
  };
  let value = '';
</script>

<Meta
  title="Components / Forms / VtmnSelect"
  component={VtmnSelect}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnSelect {...args} bind:value>
    <option value="" disabled selected>Select</option>
    <option value="gymnastics">Gymnastics</option>
    <option value="archery">Archery</option>
    <option value="climbing">Climbing</option>
    <option value="surf">Surf</option>
    <option value="badminton">Badminton</option>
    <option value="football">Football</option>
  </VtmnSelect>
</Template>

<Story name="Overview" />
