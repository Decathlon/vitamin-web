<script>
  import { VTMN_BREADCRUMB_ICON } from './enums';

  export let icon = VTMN_BREADCRUMB_ICON.HOME_LINE;

  /**
   * The href that makes the tag interactive.
   * @type {string}
   */
  export let href;

  export let item;
</script>

{#if href}
  <li>
    {#if icon}
      <span class={icon} aria-hidden="true" />
    {/if}
    <a {href}>{item}</a>
  </li>
{:else}
  <li aria-label="Current page title">{item}</li>
{/if}

<style lang="css">
  @import '@vtmn/css-breadcrumb';
</style>
