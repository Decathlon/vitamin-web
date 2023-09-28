<script>
  import VtmnAlertItem from '../VtmnAlertItem.svelte';
</script>

<VtmnAlertItem {...$$restProps} on:close>
  <svelte:fragment slot="title">Slot title</svelte:fragment>
  <svelte:fragment slot="description">Slot description</svelte:fragment>
</VtmnAlertItem>
