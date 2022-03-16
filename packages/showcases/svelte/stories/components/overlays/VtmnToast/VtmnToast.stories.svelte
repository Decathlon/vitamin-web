<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { vtmnToastStore, VtmnToast, VtmnButton } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/overlays/toast.csf';
</script>

<Meta
  title="Components / Overlays / VtmnToast"
  component={VtmnToast}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnButton
    on:click={() => {
      vtmnToastStore.send(args);
    }}>Display toast</VtmnButton
  >
  <VtmnToast {...args} />
</Template>

<Story name="Overview" />

<Story name="With close button" args={{ withCloseButton: true }} />

<Story name="With icon" args={{ withIcon: true }} />
