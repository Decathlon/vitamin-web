<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import VtmnPopover, {
    POSITION,
  } from '@vtmn/svelte/src/components/VtmnPopover.svelte';
  import VtmnButton from '@vtmn/svelte/src/components/VtmnButton.svelte';

  const popoverArgs = {
    title: 'This is the title of the popover',
    body: 'A popover can appear when users click or focus an element to provide his description in details, and often also with a link or button inside. Popovers will automatically close when clicking outside the popover bounds.',
  };
</script>

<Meta
  title="Components/VtmnPopover"
  component={VtmnPopover}
  argTypes={{
    position: {
      control: 'select',
      options: Object.keys(POSITION),
      mapping: POSITION,
    },
    title: { control: 'text' },
    body: { control: 'text' },
  }}
/>

<Template let:args>
  <div class="story-container">
    <VtmnPopover position={args.position}>
      <svelte:fragment slot="title">{args.title}</svelte:fragment>
      <svelte:fragment slot="body">{args.body}</svelte:fragment>
      <VtmnButton slot="placeholder">{args.position}</VtmnButton>
    </VtmnPopover>
  </div>
</Template>

<Story name="All positions">
  <div class="story-container">
    {#each Object.values(POSITION) as position}
      <VtmnPopover {position}>
        <svelte:fragment slot="title">{popoverArgs.title}</svelte:fragment>
        <svelte:fragment slot="body">{popoverArgs.body}</svelte:fragment>
        <VtmnButton slot="placeholder">{position}</VtmnButton>
      </VtmnPopover>
    {/each}
  </div>
</Story>

<Story
  name="With Controls"
  args={{
    position: POSITION.BOTTOM,
    ...popoverArgs,
  }}
/>

<style>
  .story-container {
    font-size: 1rem;

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;
  }
</style>
