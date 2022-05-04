<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnAccordion, VtmnButton } from '@vtmn/svelte';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/structure/accordion.csf';
</script>

<Meta
  title="Components / Structure / VtmnAccordion"
  component={VtmnAccordion}
  {parameters}
  argTypes={{
    ...argTypes,
    slot: {
      type: { name: 'string', required: false },
      description: 'Description of the accordion',
      defaultValue: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      control: {
        type: 'text',
      },
    },
  }}
/>
<Story name="Overview" let:args>
  <VtmnAccordion class="accordion-stories" {...args}>
    <p>
      {args.slot}
    </p>
  </VtmnAccordion>
</Story>
<Story name="Simple">
  <VtmnAccordion summary="Item 1" class="accordion-stories" open>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 2" class="accordion-stories">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 3" disabled class="accordion-stories">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
</Story>
<Story name="With left icons">
  <VtmnAccordion summary="Item 1" withIconLeft class="accordion-stories" open>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 2" withIconLeft class="accordion-stories">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
  <VtmnAccordion
    summary="Item 3"
    disabled
    withIconLeft
    class="accordion-stories"
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
</Story>
<Story name="Custom content">
  <VtmnAccordion summary="Item 1" withIconLeft class="accordion-stories" open>
    <VtmnButton variant="primary" size="small">Button 1</VtmnButton>
    <VtmnButton variant="primary" size="small">Button 2</VtmnButton>
    <VtmnButton variant="primary" size="small">Button 3</VtmnButton>
  </VtmnAccordion>
</Story>

<style>
  :global(.accordion-stories) {
    width: 400px;
  }
</style>
