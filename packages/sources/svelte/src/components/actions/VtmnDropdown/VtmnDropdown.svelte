<script>
  import { createEventDispatcher } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import { clickOutside } from '../../../directives/clickOutside';
  import { objectToStyle } from '../../../utils/style';

  /** @restProps */

  export let id;
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

  export let group = [];

  $: componentClass = cn('vtmn-dropdown', 'toto', className);
  $: menuStyles = objectToStyle({
    '--toto-var': `${menuMaxHeight}px`,
  });

  const dispatch = createEventDispatcher();

  let details;

  const closeMenu = () => (details.open = false);
</script>

<div class={componentClass} aria-disabled={disabled} {...$$restProps}>
  {#if labelText}
    <label id={labelText}>{labelText}</label>
  {/if}

  <details bind:this={details} on:change>
    <summary aria-labelledby={id}>{defaultOption}</summary>
    <div class="vtmn-dropdown_items" style={menuStyles}>
      <slot />
    </div>
    aria-labelledbyid
  </details>
</div>

<style lang="css">
  @import '@vtmn/css-dropdown';
  .toto {
    min-height: var(--toto-var, 0);
  }
</style>
