<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnCard, VtmnButton, VtmnTag, VtmnPrice } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/structure/card.csf';
  const src =
    'https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg';
</script>

<Meta
  title="Components / Structure / VtmnCard"
  component={VtmnCard}
  {parameters}
  {argTypes}
/>

<Template let:args>
  <VtmnCard {...args}>
    <svelte:fragment slot="img">
      <img alt="" {src} />
    </svelte:fragment>
    <p slot="content">
      A container for content representing a single entity. e.g. a contact,
      article, or task.
    </p>
  </VtmnCard>
</Template>

<Story name="Overview" />

<Story
  name="Top image"
  args={{
    variant: 'top-image',
  }}
/>

<Story
  name="Top image fullImage"
  args={{
    variant: 'top-image',
    fullImage: true,
  }}
/>

<Story
  name="Top image without image"
  args={{
    variant: 'top-image',
    img: '',
  }}
/>

<Story
  name="Side image"
  args={{
    variant: 'side-image',
  }}
/>

<Story
  name="Full image"
  args={{
    variant: 'full-image',
  }}
/>

<Story
  name="Full image with content opaque"
  args={{
    variant: 'full-image',
    contentOpaque: true,
  }}
/>

<Story name="Top image with actions" let:args>
  <VtmnCard {...args}>
    <svelte:fragment slot="img">
      <img alt="" {src} />
      <VtmnTag variant="decorative_jade">Tag</VtmnTag>
    </svelte:fragment>
    <p slot="content">
      A container for content representing a single entity. e.g. a contact,
      article, or task.
    </p>
    <svelte:fragment slot="actions">
      <VtmnPrice variant="accent">150,00 €</VtmnPrice>
      <VtmnButton variant="primary" size="stretched">Button 1</VtmnButton>
    </svelte:fragment>
  </VtmnCard>
</Story>

<Story name="Full image with actions" let:args>
  <VtmnCard {...args} variant="full-image">
    <svelte:fragment slot="img">
      <img alt="" {src} />
      <VtmnTag variant="decorative_jade">Tag</VtmnTag>
    </svelte:fragment>
    <p slot="content">
      A container for content representing a single entity. e.g. a contact,
      article, or task.
    </p>
    <svelte:fragment slot="actions">
      <VtmnPrice variant="accent">150,00 €</VtmnPrice>
      <VtmnButton variant="primary-reversed" size="stretched"
        >Button 1</VtmnButton
      >
    </svelte:fragment>
  </VtmnCard>
</Story>

<style>
  :global(.vtmn-card) {
    max-width: 300px;
  }
  :global(#anchor--components-structure-vtmncard--overview .docs-story),
  :global(
      #anchor--components-structure-vtmncard--overview
        .docs-story
        > div:first-child
    ),
  :global(#anchor--components-structure-vtmncard--top-image .docs-story),
  :global(
      #anchor--components-structure-vtmncard--top-image
        .docs-story
        > div:first-child
    ),
  :global(
      #anchor--components-structure-vtmncard--top-image-full-image .docs-story
    ),
  :global(
      #anchor--components-structure-vtmncard--top-image-full-image
        .docs-story
        > div:first-child
    ),
  :global(
      #anchor--components-structure-vtmncard--top-image-without-image
        .docs-story
    ),
  :global(
      #anchor--components-structure-vtmncard--top-image-without-image
        .docs-story
        > div:first-child
    ),
  :global(#anchor--components-structure-vtmncard--full-image .docs-story),
  :global(
      #anchor--components-structure-vtmncard--full-image
        .docs-story
        > div:first-child
    ),
  :global(
      #anchor--components-structure-vtmncard--full-image-with-content-opaque
        .docs-story
    ),
  :global(
      #anchor--components-structure-vtmncard--full-image-with-content-opaque
        .docs-story
        > div:first-child
    ),
  :global(
      #anchor--components-structure-vtmncard--full-image-with-actions
        .docs-story
    ),
  :global(
      #anchor--components-structure-vtmncard--full-image-with-actions
        .docs-story
        > div:first-child
    ) {
    height: 600px;
  }

  :global(
      #anchor--components-structure-vtmncard--top-image-with-actions .docs-story
    ),
  :global(
      #anchor--components-structure-vtmncard--top-image-with-actions
        .docs-story
        > div:first-child
    ) {
    height: 700px;
  }
</style>
