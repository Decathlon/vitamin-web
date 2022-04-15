<script>
  import VtmnDropdown from '../VtmnDropdown.svelte';
  import VtmnDropdownItem from '../../VtmnDropdownItem/VtmnDropdownItem.svelte';
  let group = [];
</script>

<VtmnDropdown {...$$restProps} on:change>
  <VtmnDropdownItem id="item-1" value="1" bind:group>Option 1</VtmnDropdownItem>
  <VtmnDropdownItem id="item-2" value="2" bind:group>Option 2</VtmnDropdownItem>
  <VtmnDropdownItem id="item-3" value="3" bind:group>Option 3</VtmnDropdownItem>
</VtmnDropdown>
