<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { vtmnToastStore, VtmnToast, VtmnButton } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/overlays/toast.csf';
  import README from '@vtmn/svelte/src/components/overlays/VtmnToast/README.md';
</script>

<Meta
  title="Components / Overlays / VtmnToast"
  component={VtmnToast}
  {argTypes}
  parameters={{
    ...parameters,
    readme: {
      sidebar: README,
      readme: README,
    },
  }}
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
