<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnCard, VtmnButton } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/structure/card.csf';
  const argTypes = {
    variant: {
      type: { name: 'string', required: true },
      description: 'The variant of the card.',
      defaultValue: 'top-image',
      control: {
        type: 'select',
        options: ['top-image', 'side-image', 'full-image'],
      },
    },
    fullImage: {
      type: { name: 'boolean', required: false },
      description:
        'Define if image take full screen. Only on variant top-image',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    contentOpaque: {
      type: { name: 'boolean', required: false },
      description: 'Define if image is opaque. Only on variant full-image',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    title: {
      type: { name: 'string', required: true },
      description: 'Title of the card.',
      defaultValue: 'Card title',
      control: {
        type: 'text',
      },
    },
    img: {
      type: { name: 'string', required: false },
      description: 'Image url inserted on the card',
      defaultValue:
        'https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg',
      control: {
        type: 'text',
      },
    },
  };
</script>

<Meta
  title="Components / Structure / VtmnCard"
  component={VtmnCard}
  {parameters}
  {argTypes}
/>

<Template let:args>
  <VtmnCard {...args}>
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

<Story name="With actions" let:args>
  <VtmnCard {...args}>
    <p slot="content">
      A container for content representing a single entity. e.g. a contact,
      article, or task.
    </p>
    <VtmnButton slot="actions" variant="primary">Button 1</VtmnButton>
  </VtmnCard>
</Story>

<style>
  :global(.vtmn-card) {
    max-width: 400px;
  }
</style>
