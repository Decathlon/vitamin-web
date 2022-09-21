<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnAccordion, VtmnButton } from '@vtmn/svelte';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/structure/accordion.csf';
  import { action } from '@storybook/addon-actions';
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

<Template let:args>
  <VtmnAccordion
    {...args}
    class="accordion-stories"
    on:open={(e) => console.log('onOpen', e)}
    on:close={action('close')}
  >
    {args.slot}
  </VtmnAccordion>
</Template>

<Story name="Overview" />

<Story name="Multiple" let:args>
  <VtmnAccordion
    {...args}
    summary="Item 1"
    class="accordion-stories"
    open
    on:open={action('open')}
    on:close={action('close')}
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
  <VtmnAccordion
    {...args}
    summary="Item 2"
    class="accordion-stories"
    on:open={action('open')}
    on:close={action('close')}
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
  <VtmnAccordion
    {...args}
    summary="Item 3"
    disabled
    class="accordion-stories"
    on:open={action('open')}
    on:close={action('close')}
  >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </VtmnAccordion>
</Story>

<Story name="Custom content" let:args>
  <VtmnAccordion
    summary="Item 1"
    withIconLeft
    class="accordion-stories"
    open
    on:open={action('open')}
    on:close={action('close')}
    {...args}
  >
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
