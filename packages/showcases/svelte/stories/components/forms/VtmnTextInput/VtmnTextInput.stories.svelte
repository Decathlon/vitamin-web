<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnTextInput } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/forms/text-input.csf';
  import vitamixIcons from '@vtmn/icons/dist/vitamix/font/vitamix.json';

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
    icon: {
      control: 'select',
      options: ['', ...Object.keys(vitamixIcons)],
    },
  }}
  {parameters}
/>

<Template let:args>
  <VtmnTextInput {...args} />
</Template>

<Story name="Overview" args={textinputArgs} />
