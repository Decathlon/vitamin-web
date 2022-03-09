<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnAccordion, VtmnButton } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/structure/accordion.csf';
  const argTypes = {
    summary: {
      type: { name: 'string', required: true },
      description: 'Summary of the accordion',
      defaultValue: 'Item 1',
      control: {
        type: 'text',
      },
    },
    open: {
      type: { name: 'boolean', required: false },
      description: 'Define if accorion is open or not',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    withIconLeft: {
      type: { name: 'boolean', required: false },
      description: 'Display left icon on summary',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'Disable the accordion',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    class: {
      type: { name: 'string', required: true },
      description: 'list of classes of the accordion',
      defaultValue: 'accordion-stories',
      control: {
        type: 'text',
      },
    },
    slot: {
      type: { name: 'string', required: false },
      description: 'Description of the accordion',
      defaultValue: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
                    aliquam vel quia beatae facere veniam`,
      control: {
        type: 'text',
      },
    },
  };
</script>

<Meta
  title="Components / Structure / VtmnAccordion"
  component={VtmnAccordion}
  {parameters}
  {argTypes}
/>
<Story name="Overview" let:args>
  <VtmnAccordion class="accordion-stories" {...args}>
    <p>
      {args.slot}
    </p>
  </VtmnAccordion>
</Story>
<Story name="Default">
  <VtmnAccordion summary="Item 1" class="accordion-stories" open>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 2" class="accordion-stories">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 3" disabled class="accordion-stories">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
</Story>
<Story name="With left icon">
  <VtmnAccordion summary="Item 1" withIconLeft class="accordion-stories" open>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 2" withIconLeft class="accordion-stories">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
  <VtmnAccordion
    summary="Item 3"
    disabled
    withIconLeft
    class="accordion-stories"
  >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
</Story>
<Story name="Custom content">
  <VtmnAccordion summary="Item 1" withIconLeft class="accordion-stories" open>
    <VtmnButton variant="secondary" size="small">Button 1</VtmnButton>
    <VtmnButton variant="secondary" size="small">Button 2</VtmnButton>
    <VtmnButton variant="secondary" size="small">Button 3</VtmnButton>
  </VtmnAccordion>
</Story>

<style>
  :global(.accordion-stories) {
    width: 400px;
  }
</style>
