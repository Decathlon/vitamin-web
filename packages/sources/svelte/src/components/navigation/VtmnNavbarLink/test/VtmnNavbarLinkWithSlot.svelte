<script>
  import VtmnNavbarLink from '../VtmnNavbarLink.svelte';
  import VtmnBadge from '../../../indicators/VtmnBadge/VtmnBadge.svelte';
  export let label;
  export let badgeValue;
</script>

<VtmnNavbarLink {...$$restProps}>
  {#if badgeValue}
    <VtmnBadge slot="badge" value={badgeValue} />
  {/if}
  <span>{label}</span>
</VtmnNavbarLink>
