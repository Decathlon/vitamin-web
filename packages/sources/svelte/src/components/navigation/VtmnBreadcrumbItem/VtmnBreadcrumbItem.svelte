<script>
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';

  /**
   * The icon to display on the left side of the breadcrumb.
   * @type {string}
   */
  export let icon = undefined;

  /**
   * The href that makes the tag interactive.
   * @type {string}
   */
  export let href = undefined;
</script>

<li {...$$restProps}>
  {#if icon}
    <VtmnIcon value={icon} aria-hidden="true" size="16" />
  {/if}

  {#if href}
    <a {href}>
      <slot />
    </a>
  {:else}
    <slot />
  {/if}
</li>
