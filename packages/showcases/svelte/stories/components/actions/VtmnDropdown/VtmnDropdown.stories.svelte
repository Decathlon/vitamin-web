<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';
  import { VtmnDropdown } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Actions / VtmnDropdown"
  component={VtmnDropdown}
  {parameters}
  {argTypes}
/>

<Template let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown
      {...args}
      on:item-selected={(event) =>
        alert(JSON.stringify(event.detail.selectedOptions))}
    />
  </div>
</Template>

<Story name="Overview" />
