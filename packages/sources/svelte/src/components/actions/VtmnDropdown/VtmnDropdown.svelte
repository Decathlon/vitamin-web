<script>
  import { cn } from '../../../utils/classnames';
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
   * Custom classes to apply to the component.
   * @type {string} className
   */
  let className = undefined;
  export { className as class };

  $: componentClass = cn('vtmn-dropdown', className);
  $: componentItemClass = cn('vtmn-dropdown_items');

  let detail;

  const handleClickOutside = () => (detail.open = false);
</script>

<div class={componentClass} aria-disabled={disabled} {...$$restProps}>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label {id}>{label}</label>
  <details
    bind:this={detail}
    use:clickOutsideOpenDropdown
    on:clickOutside={handleClickOutside}
  >
    <summary aria-labelledby={id}>{summary}</summary>
    <div class={componentItemClass} role="group" aria-labelledby={id}>
      <slot />
    </div>
  </details>
</div>

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
