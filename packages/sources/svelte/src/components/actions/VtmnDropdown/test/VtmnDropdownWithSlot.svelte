<script>
  import VtmnDropdown from '../VtmnDropdown.svelte';
  import VtmnDropdownItem from '../../VtmnDropdownItem/VtmnDropdownItem.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleChange = (event) => {
    dispatch('test-selected', { value: event.detail.selectedOptions });
  };
</script>

<VtmnDropdown {...$$restProps} on:change={handleChange}>
  <VtmnDropdownItem labelText="Option 1" value="Option-1" />
  <VtmnDropdownItem labelText="Option 2" value="Option-2" />
  <VtmnDropdownItem labelText="Option 3" value="Option-3" />
</VtmnDropdown>
