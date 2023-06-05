<script>
  import { cn } from '../../../utils/classnames';

  /** @restProps { button } */

  /**
   * Logo anchor.
   *
   * @type {string} [logoHref]
   */
  export let logoHref = '#';

  let className = undefined;
  /**
   * Custom classes to apply to the component.
   *
   * @type {string}
   */
  export { className as class };

  $: componentClass = cn('vtmn-navbar', className);

  /**
   * Delete slot div from de DOM if slot doesn't exist.
   *
   * @param {'left-nav' | 'logo' | 'middle-area' | 'right-nav'} slotName
   * @returns {boolean} slotExists
   */
  const checkSlotExists = (slotName) => {
    return $$slots[slotName];
  };
</script>

<nav class={componentClass} aria-label="navbar" {...$$restProps}>
  {#if checkSlotExists('left-nav')}
    <div class="vtmn-navbar_left-navigation">
      <slot name="left-nav" />
    </div>
  {/if}

  {#if checkSlotExists('logo')}
    <a class="vtmn-navbar_logo" href={logoHref}>
      <slot name="logo" />
    </a>
  {/if}

  {#if checkSlotExists('middle-area')}
    <div class="vtmn-navbar_middle-area">
      <slot name="middle-area" />
    </div>
  {/if}

  {#if checkSlotExists('right-nav')}
    <div class="vtmn-navbar_right-navigation">
      <slot name="right-nav" />
    </div>
  {/if}
</nav>

<style lang="css">
  @import '@vtmn/css-navbar';
</style>
