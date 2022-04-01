<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';
  import { VtmnDropdown, VtmnDropdownItem } from '@vtmn/svelte';

  let test = [];

  const testChangeEvent = (event) => {
    console.log(JSON.stringify(event.deta));
    console.log(test);
  };
</script>

<Meta
  title="Components / Actions / VtmnDropdown"
  component={VtmnDropdown}
  {parameters}
  {argTypes}
/>

<Story name="Overview" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown on:change={testChangeEvent} defaultOption="coucou">
      <VtmnDropdownItem id="opt1" value="1" bind:group={test}
        >Option 1</VtmnDropdownItem
      >
      <VtmnDropdownItem id="opt2" value="2" bind:group={test}
        >Option 2</VtmnDropdownItem
      >
      <VtmnDropdownItem id="opt3" value="3" bind:group={test}
        >Option 3</VtmnDropdownItem
      >
    </VtmnDropdown>
  </div>
</Story>
