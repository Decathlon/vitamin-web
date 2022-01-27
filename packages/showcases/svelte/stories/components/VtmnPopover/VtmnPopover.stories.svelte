<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnPopover, VtmnLink, VTMN_POPOVER_POSITION } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/overlays/popover.csf';

  const popoverArgs = {
    id: 'My popover',
    title: 'This is the title of the popover',
    body: 'A popover can appear when users click or focus an element.',
    position: VTMN_POPOVER_POSITION.BOTTOM,
  };
</script>

<Meta
  title="Components/VtmnPopover"
  component={VtmnPopover}
  argTypes={{
    position: {
      control: 'select',
      options: Object.values(VTMN_POPOVER_POSITION),
    },
  }}
  {parameters}
/>

<Template let:args>
  <VtmnPopover position={args.position} id={args.id}>
    <svelte:fragment slot="title">{args.title}</svelte:fragment>
    <svelte:fragment slot="body">{args.body}</svelte:fragment>
    <VtmnLink slot="placeholder">Popover on the {args.position}</VtmnLink>
  </VtmnPopover>
</Template>

<Story name="Overview" args={popoverArgs} />
