<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VARIANT } from '@vtmn/svelte/src/components/indicators/VtmnBadge/enums.js';

  import { VtmnBadge } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/indicators/badge.csf';
</script>

<Meta
  title="Components / Indicators / VtmnBadge"
  component={VtmnBadge}
  argTypes={{
    variant: {
      control: 'select',
      options: [...Object.keys(VARIANT)],
      defaultValue: VARIANT.DEFAULT,
    },
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
  }}
  {parameters}
/>

<Template let:args>
  <VtmnBadge {...args} />
</Template>

<Story name="Overview" />
