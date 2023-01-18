<script>
  import VtmnListItem from '../VtmnListItem.svelte';
  import { VtmnIcon, VtmnButton } from '../../../..';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<VtmnListItem {...$$restProps} on:click>
  <VtmnIcon slot="start-visual" value="heart-line" />
  <span slot="text">Unit test text</span>
  <span slot="subtext">Unit test subtext</span>
  <VtmnButton
    slot="end-action"
    on:keydown
    on:click={(e) => {
      e.stopPropagation();
      dispatch('click');
    }}>Button</VtmnButton
  >
</VtmnListItem>
