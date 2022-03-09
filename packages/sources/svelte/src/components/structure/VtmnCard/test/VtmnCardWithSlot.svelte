<script>
  import VtmnCard from '../VtmnCard.svelte';
</script>

<VtmnCard {...$$restProps}>
  <img
    slot="img"
    alt=""
    src="https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg"
  />
  <p slot="content">Unit test - content</p>
  <button slot="actions" type="button">Unit test - button</button>
</VtmnCard>
