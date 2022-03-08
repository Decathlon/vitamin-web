<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { VtmnSearch } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Navigation / VtmnSearch"
  component={VtmnSearch}
  argTypes={{
    variant: {
      description: 'Color variant of search component.',
      defaultValue: 'default',
    },
    disabled: {
      description: 'Disabled state',
      defaultValue: false,
    },
    size: {
      description: 'Size of input.',
      defaultValue: 'medium',
    },
  }}
  parameters={{
    actions: {
      handles: ['mouseover', 'click', 'focus', 'keypress', 'keydown'],
    },
  }}
/>

<Template let:args>
  <VtmnSearch {...args} />
</Template>

<Story name="Overview" />

<Story name="Ghost variant" args={{ variant: 'ghost' }} />

<Story name="Persistent variant" args={{ variant: 'persistent' }} />

<Story name="On content variant" args={{ variant: 'on-content' }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Small size" args={{ size: 'small' }} />
