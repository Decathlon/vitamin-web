<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';
  import { VtmnDropdown, VtmnDropdownItem } from '@vtmn/svelte';
  let groupOverview = [];
  let groupWithIcon = [];
  let groupDisabled = [];
</script>

<Meta
  title="Components / Actions / VtmnDropdown"
  component={VtmnDropdown}
  {parameters}
  {argTypes}
/>

<Story name="Overview" let:args>
  <VtmnDropdown {...args} on:change>
    {#each Array(20) as _, index}
      <VtmnDropdownItem
        id={`overview-opt-${index}`}
        bind:group={groupOverview}
        value={index}>Dropdown Option {index}</VtmnDropdownItem
      >
    {/each}
  </VtmnDropdown>
</Story>

<Story name="With icons" let:args>
  <VtmnDropdown {...args} on:change>
    {#each Array(5) as _, index}
      <VtmnDropdownItem
        id={`with-icons-opt-${index}`}
        bind:group={groupWithIcon}
        value={index}
        icon="user-line"
        divider={index !== 4}
      >
        Dropdown Option {index}</VtmnDropdownItem
      >
    {/each}
  </VtmnDropdown>
</Story>

<Story name="Disabled" let:args>
  <VtmnDropdown {...args} on:change disabled>
    {#each Array(5) as _, index}
      <VtmnDropdownItem
        id={`disabled-${index}`}
        bind:group={groupDisabled}
        value={index}
        icon="user-line"
        divider={index !== 4}>Dropdown Option {index}</VtmnDropdownItem
      >
    {/each}
  </VtmnDropdown>
</Story>

<Story name="With end text" let:args>
  <VtmnDropdown {...args} on:change>
    {#each Array(5) as _, index}
      <VtmnDropdownItem
        id={`disabled-${index}`}
        bind:group={groupDisabled}
        value={index}
        icon="user-line"
        divider={index !== 4}
      >
        Dropdown Option {index}
        <svelte:fragment slot="endText">
          {`End text ${index}`}
        </svelte:fragment>
      </VtmnDropdownItem>
    {/each}
  </VtmnDropdown>
</Story>

<style>
  :global(#anchor--components-actions-vtmndropdown--overview .docs-story),
  :global(#anchor--components-actions-vtmndropdown--overview
      .docs-story
      > div:first-child),
  :global(#anchor--components-actions-vtmndropdown--with-icons .docs-story),
  :global(#anchor--components-actions-vtmndropdown--with-icons
      .docs-story
      > div:first-child) {
    height: 500px;
    justify-content: flex-start;
  }
</style>
