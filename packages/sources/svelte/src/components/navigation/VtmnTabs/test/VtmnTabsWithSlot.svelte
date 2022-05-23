<script>
  import VtmnTabs from '../VtmnTabs.svelte';
  import VtmnTabsItem from '../../VtmnTabsItem/VtmnTabsItem.svelte';
</script>

<VtmnTabs {...$$restProps}>
  <VtmnTabsItem icon="checkbox-circle-line" badge={99}>Tab Name</VtmnTabsItem>
</VtmnTabs>
