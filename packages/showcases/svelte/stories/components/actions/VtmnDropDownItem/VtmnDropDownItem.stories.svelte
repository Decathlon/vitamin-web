<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/actions/dropdownItem.csf';
  import { VtmnDropdown, VtmnDropdownItem } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Actions / VtmnDropdownItem"
  component={VtmnDropdown}
  {parameters}
  {argTypes}
/>

<Template let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnDropdown defaultOption="Lorem ipsum">
      <VtmnDropdownItem {...args} />
    </VtmnDropdown>
  </div>
</Template>

<Story name="Overview" />

<Story name="Divider" args={{ divider: true }} />

<Story name="Icon" args={{ icon: 'vtmx-user-line' }} />
