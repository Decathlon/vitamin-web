<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { vtmnSnackbarStore, VtmnSnackbar, VtmnButton } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/overlays/snackbar.csf';
</script>

<Meta
  title="Components / Overlays / VtmnSnackbar"
  component={VtmnSnackbar}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnButton
    on:click={() => {
      vtmnSnackbarStore.send({
        ...args,
        action: {
          label: args.actionLabel,
          execute: () => {
            console.log('Execute action');
          },
        },
      });
    }}>Display snackbar</VtmnButton
  >
  <VtmnSnackbar />
</Template>

<Story name="Overview" />
