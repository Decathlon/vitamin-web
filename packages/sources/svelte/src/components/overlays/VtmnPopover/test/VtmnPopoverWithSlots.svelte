<script>
  import VtmnPopover from '../VtmnPopover.svelte';
</script>

<VtmnPopover {...$$restProps}>
  <svelte:fragment slot="title">Unit-test title</svelte:fragment>
  <svelte:fragment slot="body">unit-test body</svelte:fragment>
  <svelte:fragment>unit-test placeholder</svelte:fragment>
</VtmnPopover>
