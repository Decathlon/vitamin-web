<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import { VtmnBadge } from '@vtmn/svelte';
  import docs from './docs.mdx';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/indicators/badge.csf';
</script>

<Meta
  title="Components / Indicators / VtmnBadge"
  component={VtmnBadge}
  {...argTypes}
  parameters={{
    ...parameters,
    docs: {
      page: docs,
    },
  }}
/>

<Template let:args>
  <VtmnBadge {...args} />
</Template>

<Story
  name="Playground"
  args={{
    variant: 'default',
    value: 6,
  }}
/>

<Story name="Default">
  <VtmnBadge variant="default" />
  <VtmnBadge variant="default" value="6" />
  <VtmnBadge variant="default" value="100" />
</Story>

<Story name="Brand">
  <VtmnBadge variant="brand" />
  <VtmnBadge variant="brand" value="6" />
  <VtmnBadge variant="brand" value="100" />
</Story>

<Story
  name="Reversed"
  parameters={{
    backgrounds: { default: 'primary-reversed' },
  }}
>
  <VtmnBadge variant="reversed" />
  <VtmnBadge variant="reversed" value="6" />
  <VtmnBadge variant="reversed" value="100" />
</Story>

<Story name="Accent">
  <VtmnBadge variant="accent" />
  <VtmnBadge variant="accent" value="6" />
  <VtmnBadge variant="accent" value="100" />
</Story>

<Story name="Alert">
  <VtmnBadge variant="alert" />
  <VtmnBadge variant="alert" value="6" />
  <VtmnBadge variant="alert" value="100" />
</Story>
