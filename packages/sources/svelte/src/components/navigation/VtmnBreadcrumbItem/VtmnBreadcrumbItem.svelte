<script>
  import VtmnIcon from '../../../guideline/VtmnIcon/VtmnIcon.svelte';

  /**
   * The icon to display on the left side of the breadcrumb.
   * @type {string}
   */
  export let icon = undefined;

  /**
   * The href that makes the tag interactive.
   * @type {string}
   */
  export let href;
</script>

<li {...$$restProps}>
  {#if icon}
    <VtmnIcon value={icon} aria-hidden="true" />
  {/if}

  {#if href}
    <slot name="link" />
  {:else}
    <slot />
  {/if}
</li>
