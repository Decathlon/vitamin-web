<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnRadioButton } from '@vtmn/svelte';

  export const argTypes = {
    id: {
      type: { name: 'string', required: true },
      description: 'Id of the input',
      control: {
        type: 'text',
      },
    },
    name: {
      type: { name: 'string', required: true },
      description: 'Label of the input',
      control: {
        type: 'text',
      },
    },
    value: {
      type: { name: 'string', required: true },
      description: 'Value of the input',
      control: {
        type: 'text',
      },
    },
    group: {
      type: { name: 'string' },
      description: 'Binding group variable to retrieve selected',
      control: false,
    },
    checked: {
      type: { name: 'boolean' },
      description: 'Whether the input is checked',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Whether the input is disabled',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  };

  let preferedSport;
</script>

<Meta
  title="Components / Selection controls / VtmnRadioButton"
  component={VtmnRadioButton}
  {argTypes}
/>

<Template let:args>
  <VtmnRadioButton {...args}>
    {args.slot}
  </VtmnRadioButton>
</Template>

<Story
  name="Overview"
  args={{
    id: 'id',
    name: 'name',
    value: 'value',
  }}
>
  label example
</Story>

<Story name="Multi Radio Buttons">
  <form action="#">
    <VtmnRadioButton
      id="your-choice-1"
      name="favorite-choice"
      value="1"
      bind:group={preferedSport}
      checked
    >
      Ski
    </VtmnRadioButton>
    <VtmnRadioButton
      id="your-choice-2"
      name="favorite-choice"
      value="2"
      bind:group={preferedSport}
    >
      MTB
    </VtmnRadioButton>
    <VtmnRadioButton
      id="your-choice-3"
      name="favorite-choice"
      value="3"
      bind:group={preferedSport}
      disabled
    >
      Badminton
    </VtmnRadioButton>
  </form>
</Story>
