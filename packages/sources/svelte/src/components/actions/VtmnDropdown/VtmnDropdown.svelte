<script>
  import { cn } from '../../../utils/classnames';
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from '../../../utils/clickOutside';

  /** @restProps */

  /**
   * Custom classes to apply to the component.
   * @type {array} options
   */
  export let options;

  /**
   * The main label. If not set the label is not displayed
   *
   * @type {string} [label]
   */
  export let label;

  /**
   * Default dromdown label
   *
   * @type {string} defaultOption
   */
  export let defaultOption;

  /**
   * Custom classes to apply to the component.
   * @type {string} className
   */
  let className = '';

  export { className as class };

  /**
   * Menu item divider.
   *
   * @type {boolean} [divider]
   * @defaultValue false
   */
  export let divider = false;

  /**
   * Set disabled state of list item.
   *
   * @type {boolean} [disabled]
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * Icon for each menu item.
   *
   * @type {string} [icon]
   */
  export let icon;

  /**
   * Max height of menu, this enable scroll.
   * @type {number} [menuMaxHeight]
   */
  export let menuMaxHeight = null;

  $: componentClass = cn('vtmn-dropdown', className);

  const dispatch = createEventDispatcher();

  let selectedOptions = [];

  /**
   * Add or remove elements in options array.
   *
   * @param {string} value Selected value
   */
  const onSelectItem = (value) => {
    if (selectedOptions.includes(value))
      selectedOptions = selectedOptions.filter((option) => option !== value);
    else selectedOptions = [...selectedOptions, value];

    dispatch('item-selected', {
      selectedOptions,
    });

    closeMenu();
  };

  let details;

  /**
   * Close dropdown menu.
   */
  function closeMenu() {
    details.open = false;
  }
</script>

<div
  class={componentClass}
  {...$$restProps}
  aria-disabled={disabled}
  use:clickOutside
  on:click_outside={closeMenu}
>
  {#if label}
    <label id={options[0].id}>{label}</label>
  {/if}

  <details bind:this={details}>
    <summary aria-labelledby={options[0].id}>{defaultOption}</summary>

    <div
      class="vtmn-dropdown_items"
      style={`height: ${
        menuMaxHeight && menuMaxHeight > 1 ? menuMaxHeight + 'px' : 'auto'
      }`}
    >
      {#each options as option, index (option.label)}
        {#if divider && index !== 0}
          <div
            class="vtmn-divider vtmn-divider_orientation--horizontal"
            role="separator"
          />
        {/if}

        <input
          type="checkbox"
          name={option.label}
          id={option.label}
          data-testid="dropdown-items"
        />

        <label for={option.label} on:click={() => onSelectItem(option.value)}>
          {#if icon}
            <span class={icon} />
          {/if}

          {option.label}
        </label>
      {/each}
    </div>
  </details>
</div>

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
