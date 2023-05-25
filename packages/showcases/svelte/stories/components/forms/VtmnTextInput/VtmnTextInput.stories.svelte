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
    identifier: {
      table: {
        disable: true,
      },
    },
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

<Story name="Overview" args={textinputArgs} let:args>
  <VtmnTextInput {...args} />
</Story>
<Story name="With custom label" args={textinputArgs} let:args>
  <VtmnTextInput {...args}>
    <p slot="labelComponent">
      Label <i>(Optionnal)</i>
    </p>
  </VtmnTextInput>
</Story>
