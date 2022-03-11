<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnSnackbar, VtmnButton } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/overlays/snackbar.csf';
  let show = false;
</script>

<Meta
  title="Components / Overlays / VtmnSnackbar"
  component={VtmnSnackbar}
  {argTypes}
  {parameters}
/>

<Story name="Overview" let:args>
  <VtmnButton
    on:click={() => {
      show = true;
    }}>Display snackbar</VtmnButton
  >
  <VtmnSnackbar {...args} bind:show />
</Story>

<Story name="With close button" let:args>
  <VtmnButton
    on:click={() => {
      show = true;
    }}>Display snackbar</VtmnButton
  >
  <VtmnSnackbar {...args} bind:show displayCloseButton />
</Story>

<Story name="With action button" let:args>
  <VtmnButton
    on:click={() => {
      show = true;
    }}>Display snackbar</VtmnButton
  >
  <VtmnSnackbar {...args} bind:show displayCloseButton>
    <VtmnButton variant="ghost-reversed" size="small">Action</VtmnButton>
  </VtmnSnackbar>
</Story>
