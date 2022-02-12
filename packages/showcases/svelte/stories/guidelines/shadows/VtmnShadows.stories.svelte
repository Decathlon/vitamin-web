<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnShadows } from '@vtmn/svelte';
</script>

<Meta
  title="Guidelines / Shadows / VtmnShadows"
  argTypes={{
    shadow: {
      type: { name: 'number', required: true },
      description: 'Applied shadow index for the current element',
      defaultValue: 1,
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '1',
        },
      },
      control: {
        type: 'number',
        min: 1,
        max: 4,
        step: 1,
      },
    },
  }}
/>

<Template let:args>
  <div class="vtmn-flex vtmn-w-full vtmn-justify-between">
    <div
      use:VtmnShadows={args.shadow}
      class="vtmn-flex vtmn-bg-background-primary vtmn-rounded-lg vtmn-p-4 vtmn-mb-5 vtmn-items-center vtmn-content-center"
    >
      <span
        class="vtmn-text-center vtmn-font-semibold vtmn-text-content-primary"
      >
        use:VtmnShadows="{args.shadow}"
      </span>
    </div>
  </div>
</Template>

<Story name="Overview" />
