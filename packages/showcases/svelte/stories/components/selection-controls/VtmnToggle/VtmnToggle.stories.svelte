<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnToggle } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/selection-controls/toggle.csf';

  const toggleArgs = {
    id: 'My toggle',
    title: 'This is the title of the toggle',
    body: 'A toggle can appear when users click or focus an element.',
  };
</script>

<Meta
  title="Components / Selection controls / VtmnToggle"
  component={VtmnToggle}
  argTypes={{
    position: {
      control: 'select',
      options: Object.values(),
    },
  }}
  {parameters}
/>

<Template let:args>
  <VtmnToggle position={args.position} id={args.id} />
</Template>

<Story name="Overview" args={toggleArgs} />
