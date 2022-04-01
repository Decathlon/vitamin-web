<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnPopover, VtmnLink } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/overlays/popover.csf';
</script>

<Meta
  title="Components / Overlays / VtmnPopover"
  component={VtmnPopover}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnPopover position={args.position} id={args.id}>
    <svelte:fragment slot="title">{args.title}</svelte:fragment>
    <svelte:fragment slot="body">{args.body}</svelte:fragment>
    <VtmnLink>Popover on the {args.position}</VtmnLink>
  </VtmnPopover>
</Template>

<Story name="Overview" args={{ id: 'my-popover' }} />
