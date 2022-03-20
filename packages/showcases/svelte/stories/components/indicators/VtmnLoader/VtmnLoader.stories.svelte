<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnLoader } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/indicators/loader.csf';
  const img =
    'https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg';
</script>

<Meta
  title="Components / Indicators / VtmnLoader"
  component={VtmnLoader}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnLoader {...args} />
</Template>

<Story name="Overview" />

<Story name="Linear">
  <div class="block">
    <VtmnLoader label="loading" progress="60" size="small" />
  </div>
  <div class="block">
    <VtmnLoader progress="30" size="small" />
  </div>
  <div class="block">
    <VtmnLoader size="small" indeterminate />
  </div>

  <div class="block">
    <VtmnLoader label="loading" progress="25" size="medium" />
  </div>
  <div class="block">
    <VtmnLoader progress="70" size="medium" />
  </div>
  <div class="block">
    <VtmnLoader size="medium" indeterminate />
  </div>
  <div class="block">
    <VtmnLoader label="loading" progress="35" size="large" />
  </div>
  <div class="block">
    <VtmnLoader progress="20" size="large" />
  </div>
  <div class="block">
    <VtmnLoader size="large" indeterminate />
  </div>
</Story>

<Story name="Circular">
  <div class="story-loader-circular">
    <div>
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="10"
        variant="circular"
      />
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="20"
        variant="circular"
        withTrack
      />
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="30"
        variant="circular"
        progressIndicator
      />
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="40"
        variant="circular"
        progressIndicator
        withTrack
      />
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="50"
        variant="circular"
        {img}
      />
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="60"
        variant="circular"
        withTrack
        {img}
      />
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="70"
        variant="circular"
        indeterminate
      />
      <VtmnLoader
        class="story-loader-circular-content"
        size="small"
        progress="80"
        variant="circular"
        indeterminate
        withTrack
      />
    </div>
    <div class="story-loader-circular">
      <div>
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="10"
          variant="circular"
        />
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="20"
          variant="circular"
          withTrack
        />
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="30"
          variant="circular"
          progressIndicator
        />
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="40"
          variant="circular"
          progressIndicator
          withTrack
        />
      </div>
      <div>
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="50"
          variant="circular"
          {img}
        />
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="60"
          variant="circular"
          withTrack
          {img}
        />
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="70"
          variant="circular"
          indeterminate
        />
        <VtmnLoader
          class="story-loader-circular-content"
          size="medium"
          progress="80"
          variant="circular"
          indeterminate
          withTrack
        />
      </div>
    </div>
  </div>
</Story>

<style>
  .story-loader-circular {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: center;
    align-items: flex-start;
  }
  :global(.story-loader-circular-content) {
    margin: 8px;
  }
  :global(#anchor--components-indicators-vtmnloader--circular .docs-story),
  :global(#anchor--components-indicators-vtmnloader--circular
      .docs-story
      > div:first-child) {
    height: 700px;
  }
</style>
