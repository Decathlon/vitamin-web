<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnAccordion, VtmnButton } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/structure/accordion.csf';
</script>

<Meta
  title="Components / Structure / VtmnAccordion"
  component={VtmnAccordion}
  {parameters}
/>

<Story name="Overview">
  <VtmnAccordion summary="Item 1">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 2">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 3" disabled>
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
  <VtmnAccordion summary="Item 1" withIconLeft>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>

  <VtmnAccordion summary="Item 2" withIconLeft>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
      aliquam vel quia beatae facere veniam eos dolorum consequatur rem unde
      molestiae sequi saepe iste nostrum dolore, nam voluptate recusandae autem
      alias enim. Eos minus error temporibus hic quidem obcaecati vel, odit
      adipisci autem. Molestiae, harum odio. Tempora, quo numquam.
    </p>
  </VtmnAccordion>
  <VtmnAccordion summary="Item 3" disabled withIconLeft>
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
  <VtmnAccordion summary="Item 1" withIconLeft>
    <VtmnButton variant="secondary" size="small">Button 1</VtmnButton>

    <VtmnButton variant="secondary" size="small">Button 2</VtmnButton>
    <VtmnButton variant="secondary" size="small">Button 3</VtmnButton>
  </VtmnAccordion>
</Story>

<style>
  :global(.div-decorator) {
    width: calc(100vw - 20%);
  }
</style>
