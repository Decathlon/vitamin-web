<script>
  import VtmnButton from '../VtmnButton.svelte';
</script>

<VtmnButton on:click {...$$restProps}>
  <span data-ut="slot"> Unit-button </span>
</VtmnButton>
