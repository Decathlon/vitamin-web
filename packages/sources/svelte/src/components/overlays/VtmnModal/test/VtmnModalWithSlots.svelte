<script>
  import VtmnModal from '../VtmnModal.svelte';
</script>

<VtmnModal {...$$restProps}>
  <svelte:fragment slot="title">title</svelte:fragment>
  <svelte:fragment slot="description">description</svelte:fragment>
  <svelte:fragment slot="actions">actions</svelte:fragment>
</VtmnModal>
