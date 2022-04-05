<script>
  import { cn } from '../../../utils/classnames';
  import { objectToStyle } from '../../../utils/style';
  import { clickOutsideOpenDropdown } from './directives/clickOutsideOpenDropdown';

  /** @restProps */

  /**
   * @type {string} id of the dropdown
   * @requires
   */
  export let id;

  /**
   * @type {string} The main label. If not set the labelText is not displayed
   * @requires
   */
  export let label;

  /**
   * @type {string} summary of the dropdown
   * @requires
   */
  export let summary;

  /**
   * @type {boolean} Set disabled state of list item.
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * @type {number} Max height of menu, this enable scroll.
   */
  export let menuMaxHeight = null;

  /**
   * Custom classes to apply to the component.
   * @type {string} className
   */
  let className = undefined;
  export { className as class };

  $: componentClass = cn('vtmn-dropdown', className);
  $: componentItemClass = cn(
    'vtmn-dropdown_items',
    menuMaxHeight && 'vtmn-dropdown-max-height',
  );
  $: menuStyles = objectToStyle({
    '--vtmn-dropdown-max-height': `${menuMaxHeight}px`,
  });

  let detail;

  const handleClickOutside = () => (detail.open = false);
</script>

<div class={componentClass} aria-disabled={disabled} {...$$restProps}>
  <label {id}>{label}</label>
  <details
    bind:this={detail}
    use:clickOutsideOpenDropdown
    on:clickOutside={handleClickOutside}
  >
    <summary aria-labelledby={id}>{summary}</summary>
    <div class={componentItemClass} style={menuStyles}>
      <slot />
    </div>
  </details>
</div>

<style lang="css">
  @import '@vtmn/css-dropdown';
  .vtmn-dropdown-max-height {
    max-height: var(--vtmn-dropdown-max-height, 0);
  }
</style>
