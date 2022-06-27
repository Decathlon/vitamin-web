<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnDivider } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/structure/divider.csf';
</script>

<Meta
  title="Components / Structure / VtmnDivider"
  component={VtmnDivider}
  argTypes={{
    ...argTypes,
    slot: {
      type: { name: 'string', required: false },
      description: 'Text inserted on the slot.',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  }}
  {parameters}
/>

<Story class="block" name="Overview" let:args>
  <VtmnDivider
    class="story-divider-horizontal story-divider-vertical"
    {...args}
  >
    {args.slot}
  </VtmnDivider>
</Story>

<Story name="Horizontal">
  <div class="align-column">
    <VtmnDivider class="story-divider-horizontal" orientation="horizontal" />
    <VtmnDivider
      class="story-divider-horizontal"
      orientation="horizontal"
      textPosition="start"
      labelId="title-header-1"
      slot="Start label"
    />
    <VtmnDivider
      class="story-divider-horizontal"
      orientation="horizontal"
      textPosition="center"
      labelId="title-header-2"
      slot="Center label"
    />
    <VtmnDivider
      class="story-divider-horizontal"
      orientation="horizontal"
      textPosition="end"
      labelId="title-header-3"
      slot="End label"
    />
  </div>
</Story>

<Story name="Vertical">
  <div class="align-row">
    <VtmnDivider class="story-divider-vertical" orientation="vertical" />
    <VtmnDivider
      class="story-divider-vertical"
      orientation="vertical"
      textPosition="start"
      labelId="title-header-4"
      slot="Start label"
    />
    <VtmnDivider
      class="story-divider-vertical"
      orientation="vertical"
      textPosition="center"
      labelId="title-header-5"
      slot="Center label"
    />
    <VtmnDivider
      class="story-divider-vertical"
      orientation="vertical"
      textPosition="end"
      labelId="title-header-6"
      slot="End label"
    />
  </div>
</Story>

<style>
  :global(.story-divider-horizontal) {
    width: 400px;
    margin: 8px 0;
  }
  :global(.story-divider-vertical) {
    height: 250px;
    margin: 0 8px;
  }
  .align-column {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }
  .align-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: center;
    align-items: center;
  }
</style>
