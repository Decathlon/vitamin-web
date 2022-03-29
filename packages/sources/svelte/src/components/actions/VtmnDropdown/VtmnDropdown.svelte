<script>
  import { createEventDispatcher } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import { clickOutside } from '../../../directives/clickOutside';
  import { objectToStyle } from '../../../utils/style';
  import { selectedOptions } from './vtmnDropDownStore.js';

  /** @restProps */

  /**
   * The main labelText. If not set the labelText is not displayed
   *
   * @type {string} [labelText]
   */
  export let labelText;

  /**
   * Default dropdown labelText
   *
   * @type {string} defaultOption
   */
  export let defaultOption;

  /**
   * Set disabled state of list item.
   *
   * @type {boolean} [disabled]
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * Max height of menu, this enable scroll.
   * @type {number} [menuMaxHeight]
   */
  export let menuMaxHeight = null;

  /**
   * Custom classes to apply to the component.
   * @type {string} className
   */
  let className = '';

  export { className as class };

  $: componentClass = cn('vtmn-dropdown', className);
  $: menuStyles = objectToStyle({
    'min-height': `${menuMaxHeight}px`,
  });

  const dispatch = createEventDispatcher();

  let details;

  const closeMenu = () => (details.open = false);

  selectedOptions.subscribe((selectedOptions) => {
    dispatch('change', { selectedOptions });

    if (details) closeMenu();
  });
</script>

<div
  class={componentClass}
  aria-disabled={disabled}
  use:clickOutside
  on:click_outside={closeMenu}
  {...$$restProps}
>
  {#if labelText}
    <labelText id={labelText}>{labelText}</labelText>
  {/if}

  <details bind:this={details}>
    <summary aria-labelTextledby={labelText}>{defaultOption}</summary>

    <div class="vtmn-dropdown_items" style={menuStyles}>
      <slot />
    </div>
  </details>
</div>

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
