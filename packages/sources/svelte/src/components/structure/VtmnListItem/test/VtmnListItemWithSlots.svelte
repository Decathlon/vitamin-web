<script>
  import VtmnListItem from '../VtmnListItem.svelte';
  import { VtmnIcon, VtmnButton } from '../../../..';
</script>

<VtmnListItem {...$$restProps} on:click>
  <VtmnIcon slot="start-visual" value="heart-line" />
  <span slot="text">Unit test text</span>
  <span slot="subtext">Unit test subtext</span>
  <VtmnButton slot="end-action">Button</VtmnButton>
</VtmnListItem>
