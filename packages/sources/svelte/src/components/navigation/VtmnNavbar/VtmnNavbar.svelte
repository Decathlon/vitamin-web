<script>
  import { cn } from '../../../utils/classnames';

  /** @restProps { button } */

  const SLOTS = $$props.$$slots;

  /**
   * Custom classes to apply to the component.
   *
   * @type {string}
   */
  export let className = '';

  $: componentClass = cn('vtmn-navbar', className);

  /**
   * Delete slot div from de DOM if slot doesn't exist.
   *
   * @param {'left-nav' | 'logo' | 'middle-area' | 'right-nav'} slotName
   * @returns {boolean} slotExists
   */
  const checkSlotExists = (slotName) => {
    return SLOTS && SLOTS[slotName] && SLOTS[slotName].length;
  };
</script>

<nav class={componentClass} aria-label="navbar" {...$$restProps}>
  {#if checkSlotExists('left-nav')}
    <div class="vtmn-navbar_left-navigation">
      <slot name="left-nav" />
    </div>
  {/if}

  {#if checkSlotExists('logo')}
    <div class="vtmn-navbar_right-navigation">
      <slot name="logo" />
    </div>
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
