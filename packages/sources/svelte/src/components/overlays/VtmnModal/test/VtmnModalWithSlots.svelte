<script>
  import VtmnModal from '../VtmnModal.svelte';
</script>

<VtmnModal {...$$restProps}>
  <p slot="title">title</p>
  <p slot="description">description</p>
  <div slot="actions">actions</div>
</VtmnModal>
