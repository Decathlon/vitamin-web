<script>
  import VtmnCard from '../VtmnCard.svelte';
</script>

<VtmnCard {...$$restProps}>
  <img
    slot="img"
    alt=""
    src="https://storage.googleapis.com/design-system-public/images/landscape-placeholder.jpg"
  />
  <p slot="content">Unit test - content</p>
  <button slot="actions" type="button">Unit test - button</button>
</VtmnCard>
