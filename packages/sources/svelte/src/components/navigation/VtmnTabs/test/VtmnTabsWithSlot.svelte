<script>
  import VtmnTabs from '../VtmnTabs.svelte';
  import VtmnTabsItem from '../VtmnTabsItem.svelte';
</script>

<VtmnTabs {...$$restProps}>
  <VtmnTabsItem icon="checkbox-circle-line" badgeValue={99}
    >Tab Name</VtmnTabsItem
  >
</VtmnTabs>
