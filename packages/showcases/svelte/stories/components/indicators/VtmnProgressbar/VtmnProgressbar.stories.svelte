<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnProgressbar } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/indicators/progressbar.csf';
  import README from '@vtmn/svelte/src/components/indicators/VtmnProgressbar/README.md';
  const argTypes = {
    variant: {
      type: { name: 'string', required: true },
      description: 'Variant of the progressbar.',
      defaultValue: 'linear',
      control: {
        type: 'radio',
        options: ['linear', 'circular'],
      },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the progressbar.',
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
    label: {
      type: { name: 'string', required: false },
      description: 'Label displayed for the progressbar',
      control: {
        type: 'text',
      },
      defaultValue: 'Loading',
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
    indeterminate: {
      type: { name: 'boolean', required: false },
      description: 'Set the progressbar to indeterminate',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    track: {
      type: { name: 'boolean', required: false },
      description: 'Display track path',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    img: {
      type: { name: 'string', required: false },
      description: 'Image source for circle progressbar',
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
    labelId: {
      type: { name: 'string', required: false },
      description: 'Id of the label.',
      defaultValue: undefined,
      control: { type: 'text' },
    },
  };

  const img =
    'https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg';
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
  <VtmnProgressbar labelId="label-text-0" {...args} />
</Template>

<Story name="Overview" />

<Story name="Linear">
  <div class="block">
    <VtmnProgressbar
      labelId="label-text-1"
      label="loading"
      progress="60"
      size="small"
    />
  </div>
  <div class="block">
    <VtmnProgressbar labelId="label-text-3" size="small" indeterminate />
  </div>

  <div class="block">
    <VtmnProgressbar
      labelId="label-text-4"
      label="loading"
      progress="25"
      size="medium"
    />
  </div>
  <div class="block">
    <VtmnProgressbar labelId="label-text-6" size="medium" indeterminate />
  </div>
  <div class="block">
    <VtmnProgressbar
      labelId="label-text-7"
      label="loading"
      progress="35"
      size="large"
    />
  </div>
  <div class="block">
    <VtmnProgressbar labelId="label-text-9" size="large" indeterminate />
  </div>
</Story>

<Story name="Circular">
  <div class="story-progressbar-circular">
    <div>
      <VtmnProgressbar
        class="story-progressbar-circular-content"
        size="small"
        progress="10"
        variant="circular"
        labelId="label-text-10"
      />
      <VtmnProgressbar
        class="story-progressbar-circular-content"
        size="small"
        progress="30"
        variant="circular"
        label
        labelId="label-text-12"
      />
      <VtmnProgressbar
        class="story-progressbar-circular-content"
        size="small"
        progress="40"
        variant="circular"
        label
        track
        labelId="label-text-13"
      />
      <VtmnProgressbar
        class="story-progressbar-circular-content"
        size="small"
        progress="50"
        variant="circular"
        {img}
        imgAlt="storybook progress image"
        labelId="label-text-14"
      />
      <VtmnProgressbar
        class="story-progressbar-circular-content"
        size="small"
        progress="60"
        variant="circular"
        track
        {img}
        imgAlt="storybook progress image"
        labelId="label-text-15"
      />
      <VtmnProgressbar
        class="story-progressbar-circular-content"
        size="small"
        progress="70"
        variant="circular"
        indeterminate
        labelId="label-text-16"
      />
      <VtmnProgressbar
        class="story-progressbar-circular-content"
        size="small"
        progress="80"
        variant="circular"
        indeterminate
        track
        labelId="label-text-17"
      />
    </div>
    <div class="story-progressbar-circular">
      <div>
        <VtmnProgressbar
          class="story-progressbar-circular-content"
          size="medium"
          progress="30"
          variant="circular"
          label
          labelId="label-text-20"
        />
        <VtmnProgressbar
          class="story-progressbar-circular-content"
          size="medium"
          progress="40"
          variant="circular"
          label
          track
          labelId="label-text-21"
        />
      </div>
      <div>
        <VtmnProgressbar
          class="story-progressbar-circular-content"
          size="medium"
          progress="50"
          variant="circular"
          {img}
          imgAlt="storybook progress image"
          labelId="label-text-22"
        />
        <VtmnProgressbar
          class="story-progressbar-circular-content"
          size="medium"
          progress="60"
          variant="circular"
          track
          {img}
          imgAlt="storybook progress image"
          labelId="label-text-23"
        />
        <VtmnProgressbar
          class="story-progressbar-circular-content"
          size="medium"
          progress="70"
          variant="circular"
          indeterminate
          labelId="label-text-24"
        />
        <VtmnProgressbar
          class="story-progressbar-circular-content"
          size="medium"
          progress="80"
          variant="circular"
          indeterminate
          track
          labelId="label-text-25"
        />
      </div>
    </div>
  </div>
</Story>

<style>
  .story-progressbar-circular {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: center;
    align-items: flex-start;
  }
  :global(.story-progressbar-circular-content) {
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
