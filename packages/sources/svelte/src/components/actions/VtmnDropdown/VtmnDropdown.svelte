<script>
  import { cn } from '../../../utils/classnames';
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from '../../../utils/clickOutside';

  /** @restProps */

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
   * Set disabled state of list item.
   *
   * @type {boolean} [disabled]
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * Custom classes to apply to the component.
   * @type {array} options
   */
  export let options;

  $: componentClass = cn('vtmn-dropdown', className);

  const dispatch = createEventDispatcher();

  let selectedOptions = [];

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

    <div class="vtmn-dropdown_items">
      {#each options as option (option.label)}
        <input
          type="checkbox"
          name={option.label}
          id={option.label}
          data-testid="dropdown-items"
        />

        <label for={option.label} on:click={() => onSelectItem(option.value)}>
          {option.label}
        </label>
      {/each}
    </div>
  </details>
</div>

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
