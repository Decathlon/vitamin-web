<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { parameters } from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';
  import { VtmnDropdown } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Actions / VtmnDropdown"
  component={VtmnDropdown}
  {parameters}
/>

<Template let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown {...args} />
  </div>
</Template>

<Story name="Overview" />
