<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';
  import { VtmnDropdown, VtmnDropdownItem } from '@vtmn/svelte';

  const dropdownItems = () =>
    new Array(3).fill(0).map((_, index) => ({
      labelText: `Option ${index + 1}`,
      value: `option-${index + 1}`,
    }));

  const testChangeEvent = (event) =>
    console.log(JSON.stringify(event.detail.selectedOptions));
</script>

<Meta
  title="Components / Actions / VtmnDropdown"
  component={VtmnDropdown}
  {parameters}
  {argTypes}
/>

<Story name="Overview" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown
      {...{ ...args, ...{ defaultOption: dropdownItems()[0].labelText } }}
      on:change={testChangeEvent}
    >
      {#each dropdownItems() as { labelText, value }}
        <VtmnDropdownItem {labelText} {value} />
      {/each}
    </VtmnDropdown>
  </div>
</Story>

<Story name="With divider" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown
      {...{
        ...args,
        ...{ divider: true },
      }}
      on:change={testChangeEvent}
    >
      {#each dropdownItems() as { labelText, value }, index}
        <VtmnDropdownItem
          {labelText}
          {value}
          divider={index < dropdownItems().length}
        />
      {/each}
    </VtmnDropdown>
  </div>
</Story>

<Story name="With icons" let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown {...args} on:change={testChangeEvent}>
      {#each dropdownItems() as { labelText, value }, index}
        <VtmnDropdownItem
          {labelText}
          {value}
          position={index}
          icon="vtmx-user-line"
        />
      {/each}
    </VtmnDropdown>
  </div>
</Story>

<Story name="Disabled" args={{ disabled: true }} let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown {...args} on:change={testChangeEvent}>
      {#each dropdownItems() as { labelText, value }, index}
        <VtmnDropdownItem {labelText} {value} position={index} />
      {/each}
    </VtmnDropdown>
  </div>
</Story>

<Story name="Fixed height" args={{ menuMaxHeight: 200 }} let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown {...args} on:change={testChangeEvent}>
      {#each dropdownItems() as { labelText, value }, index}
        <VtmnDropdownItem {labelText} {value} position={index} />
      {/each}
    </VtmnDropdown>
  </div>
</Story>
