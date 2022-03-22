<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnProgressbar } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/indicators/progressbar.csf';
  import README from '@vtmn/svelte/src/components/indicators/VtmnProgressbar/README.md';

  const img =
    'https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg';
  export const argTypes = {
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the loader.',
      defaultValue: 'medium',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'medium' },
      },
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      type: { name: 'string', required: true },
      description: 'Variant of the loader.',
      defaultValue: 'linear',
      control: {
        type: 'radio',
        options: ['linear', 'circular'],
      },
    },
    progress: {
      type: { name: 'number', required: false },
      description: 'Value of the progressbar',
      defaultValue: 30,
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    label: {
      type: { name: 'string', required: false },
      description: 'Label displayed for the loader',
      control: {
        type: 'text',
      },
    },
    indeterminate: {
      type: { name: 'boolean', required: false },
      description: 'Set the loader to indeterminate',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    withTrack: {
      type: { name: 'boolean', required: false },
      description: 'Display track path',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    img: {
      type: { name: 'string', required: false },
      description: 'Image source for circle loader',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    imgAlt: {
      type: { name: 'string', required: false },
      description: 'Alternative text for the image.',
      control: {
        type: 'text',
      },
    },
  };
</script>

<Meta
  title="Components / Indicators / VtmnProgressbar"
  component={VtmnProgressbar}
  {argTypes}
  parameters={{
    ...parameters,
    readme: {
      sidebar: README,
      readme: README,
    },
  }}
/>

<Template let:args>
  <VtmnProgressbar {...args} />
</Template>

<Story name="Overview" />

<Story name="Linear">
  <div class="block">
    <VtmnProgressbar label="loading" progress="60" size="small" />
  </div>
  <div class="block">
    <VtmnProgressbar progress="30" size="small" />
  </div>
  <div class="block">
    <VtmnProgressbar size="small" indeterminate />
  </div>

  <div class="block">
    <VtmnProgressbar label="loading" progress="25" size="medium" />
  </div>
  <div class="block">
    <VtmnProgressbar progress="70" size="medium" />
  </div>
  <div class="block">
    <VtmnProgressbar size="medium" indeterminate />
  </div>
  <div class="block">
    <VtmnProgressbar label="loading" progress="35" size="large" />
  </div>
  <div class="block">
    <VtmnProgressbar progress="20" size="large" />
  </div>
  <div class="block">
    <VtmnProgressbar size="large" indeterminate />
  </div>
</Story>

<Story name="Circular">
  <div class="story-loader-circular">
    <div>
      <VtmnProgressbar
        class="story-loader-circular-content"
        size="small"
        progress="10"
        variant="circular"
      />
      <VtmnProgressbar
        class="story-loader-circular-content"
        size="small"
        progress="20"
        variant="circular"
        withTrack
      />
      <VtmnProgressbar
        class="story-loader-circular-content"
        size="small"
        progress="30"
        variant="circular"
        progressIndicator
      />
      <VtmnProgressbar
        class="story-loader-circular-content"
        size="small"
        progress="40"
        variant="circular"
        progressIndicator
        withTrack
      />
      <VtmnProgressbar
        class="story-loader-circular-content"
        size="small"
        progress="50"
        variant="circular"
        {img}
      />
      <VtmnProgressbar
        class="story-loader-circular-content"
        size="small"
        progress="60"
        variant="circular"
        withTrack
        {img}
      />
      <VtmnProgressbar
        class="story-loader-circular-content"
        size="small"
        progress="70"
        variant="circular"
        indeterminate
      />
      <VtmnProgressbar
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
        <VtmnProgressbar
          class="story-loader-circular-content"
          size="medium"
          progress="10"
          variant="circular"
        />
        <VtmnProgressbar
          class="story-loader-circular-content"
          size="medium"
          progress="20"
          variant="circular"
          withTrack
        />
        <VtmnProgressbar
          class="story-loader-circular-content"
          size="medium"
          progress="30"
          variant="circular"
          progressIndicator
        />
        <VtmnProgressbar
          class="story-loader-circular-content"
          size="medium"
          progress="40"
          variant="circular"
          progressIndicator
          withTrack
        />
      </div>
      <div>
        <VtmnProgressbar
          class="story-loader-circular-content"
          size="medium"
          progress="50"
          variant="circular"
          {img}
        />
        <VtmnProgressbar
          class="story-loader-circular-content"
          size="medium"
          progress="60"
          variant="circular"
          withTrack
          {img}
        />
        <VtmnProgressbar
          class="story-loader-circular-content"
          size="medium"
          progress="70"
          variant="circular"
          indeterminate
        />
        <VtmnProgressbar
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

  :global(#anchor--components-indicators-vtmnprogressbar--linear .docs-story),
  :global(#anchor--components-indicators-vtmnprogressbar--linear
      .docs-story
      > div:first-child) {
    height: 450px;
  }

  :global(#anchor--components-indicators-vtmnprogressbar--circular .docs-story),
  :global(#anchor--components-indicators-vtmnprogressbar--circular
      .docs-story
      > div:first-child) {
    height: 700px;
  }
</style>
