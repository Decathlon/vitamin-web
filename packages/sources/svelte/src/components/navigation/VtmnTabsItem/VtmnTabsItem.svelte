<script>
  import { cn } from '../../../utils/classnames';
  import VtmnBadge from '../../indicators/VtmnBadge/VtmnBadge.svelte';
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';
  export let badgeValue = undefined;
  export let icon = undefined;
  export let selected = false;

  $: componentClass = cn(selected && 'selected');
</script>

<li>
  <button
    class={componentClass}
    role="tab"
    {...$$restProps}
    on:click|preventDefault
    on:mouseover
    on:mouseenter
    on:mouseout
    on:focus
    on:blur
    on:keydown
  >
    {#if icon}
      <VtmnIcon value={icon} aria-hidden="true" />
    {/if}
    <slot />
    {#if badgeValue}
      <VtmnBadge value={badgeValue} />
    {/if}
  </button>
</li>
