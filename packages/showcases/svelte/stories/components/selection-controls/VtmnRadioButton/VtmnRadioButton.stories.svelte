<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnRadioButton } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Selection controls / VtmnRadioButton"
  component={VtmnRadioButton}
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
    label: 'label',
  }}
/>

<Story name="Multi Radio Buttons">
  <form action="#">
    <VtmnRadioButton
      id="your-choice-1"
      name="favorite-choice"
      label="Ski"
      checked={true}
    />
    <VtmnRadioButton id="your-choice-2" name="favorite-choice" label="MTB" />
    <VtmnRadioButton
      id="your-choice-3"
      name="favorite-choice"
      label="Badminton"
      disabled={true}
    />
  </form>
</Story>
