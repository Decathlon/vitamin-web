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
      description: 'Name of the input',
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
      type: { name: 'string', required: true },
      description:
        'Binding group to retrieve value in parent. To check input, group value should be equal to input value',
      control: false,
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

  let preferedSport = '1';
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

<Story name="Overview" />

<Story name="Multi Radio Buttons">
  <form action="#">
    <VtmnRadioButton
      id="your-choice-1"
      name="favorite-choice"
      value="1"
      bind:group={preferedSport}
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
