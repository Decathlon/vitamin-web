<script>
  import VtmnList from '../VtmnList.svelte';
  import VtmnListItem from '../../VtmnListItem/VtmnListItem.svelte';
</script>

<VtmnList {...$$restProps}>
  <VtmnListItem index="1">
    <svelte:fragment slot="text">Item 1</svelte:fragment>
  </VtmnListItem>
  <VtmnListItem index="2">
    <svelte:fragment slot="text">Item 2</svelte:fragment>
  </VtmnListItem>
</VtmnList>
