<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnTextInput } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

  const textinputArgs = {
    id: 'my-text-input',
    labelText: 'Label',
    placeholder: 'Placeholder Text',
    helperText: 'Helper text goes here',
  };
</script>

<Meta
  title="Components / Forms / VtmnTextInput"
  component={VtmnTextInput}
  argTypes={{
    ...argTypes,
    identifier: null,
    id: {
      type: { name: 'string', required: true },
      description: 'The id of the input.',
      defaultValue: 'vtmn-input',
      control: { type: 'text' },
    },
    value: {
      type: { name: 'string', required: true },
      description: 'Value of the input.',
      defaultValue: 'Hello world',
      control: { type: 'text' },
    },
  }}
  {parameters}
/>

<Template let:args>
  <VtmnTextInput {...args} />
</Template>

<Story name="Overview" args={textinputArgs} />
