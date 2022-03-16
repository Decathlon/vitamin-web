<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { VtmnSearch } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/navigation/search.csf';
</script>

<Meta
  title="Components / Navigation / VtmnSearch"
  component={VtmnSearch}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnSearch
    {...args}
    on:input={(e) => console.log(e.target.value)}
    on:search={(event) => alert('Search event fired ! :' + event.detail.text)}
  />
</Template>

<Story name="Overview" />

<Story name="Persistent variant" args={{ variant: 'persistent' }} />

<Story name="On content variant" args={{ variant: 'on-content' }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Small size" args={{ size: 'small' }} />
