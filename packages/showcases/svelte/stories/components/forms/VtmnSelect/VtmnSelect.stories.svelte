<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnSelect } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/forms/select.csf';
  import { argTypes } from './select.csf';
  let value = '';
</script>

<Meta
  title="Components / Forms / VtmnSelect"
  component={VtmnSelect}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnSelect
    {...args}
    bind:value
    on:change={() => console.log('change event')}
  >
    <option value="" disabled selected>Select</option>
    <option value="gymnastics">Gymnastics</option>
    <option value="archery">Archery</option>
    <option value="climbing">Climbing</option>
    <option value="surf">Surf</option>
    <option value="badminton">Badminton</option>
    <option value="football">Football</option>
  </VtmnSelect>
</Template>

<Story name="Overview" />
