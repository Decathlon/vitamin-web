<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { VtmnSearch } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Navigation / VtmnSearch"
  component={VtmnSearch}
  argTypes={{
    variant: {
      type: { name: 'string', required: true },
      description: 'Color variant of search component.',
      control: {
        type: 'select',
        options: ['default', 'ghost', 'persistent', 'on-content'],
      },
      defaultValue: 'default',
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'Disabled state',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'Size of input.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
  }}
  parameters={{
    actions: {
      handles: ['mouseover', 'click', 'focus', 'keypress', 'keydown'],
    },
  }}
/>

<Template let:args>
  <VtmnSearch
    {...args}
    on:input={(e) => console.log(e.target.value)}
    on:search={(event) => alert('Search event fired ! :' + event.detail.text)}
  />
</Template>

<Story name="Overview" />

<Story name="Ghost variant" args={{ variant: 'ghost' }} />

<Story name="Persistent variant" args={{ variant: 'persistent' }} />

<Story name="On content variant" args={{ variant: 'on-content' }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Small size" args={{ size: 'small' }} />
