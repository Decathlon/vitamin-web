<script>
  import VtmnDropdownItem from '../VtmnDropdownItem.svelte';
</script>

<VtmnDropdownItem {...$$restProps} on:change>
  Unit test 1
  <svelte:fragment slot="endText">End text</svelte:fragment>
</VtmnDropdownItem>
