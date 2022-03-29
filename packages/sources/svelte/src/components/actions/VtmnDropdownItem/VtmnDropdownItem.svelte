<script>
  import { createEventDispatcher } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import VtmnDivider from '../../structure/VtmnDivider/VtmnDivider.svelte';
  import { selectedOptions } from '../VtmnDropdown/vtmnDropDownStore.js';

  /** @restProps */

  /**
   * labelText of the dropdown item
   *
   * @type {string} labelText
   */
  export let labelText;

  /**
   * Value of the dropdown item
   *
   * @type {string|number} value
   */
  export let value;

  /**
   * Menu item divider.
   *
   * @type {boolean} [divider]
   * @defaultValue false
   */
  export let divider = false;

  /**
   * Icon of menu item.
   *
   * @type {string} [icon]
   */
  export let icon;

  /**
   * Custom classes to apply to the component.
   * @type {string} className
   */
  let className = '';

  export { className as class };

  $: componentClass = cn(className);

  let currentOptions;

  selectedOptions.subscribe((options) => {
    currentOptions = options;
  });

  const dispatch = createEventDispatcher();

  const onSelectItem = (value) => {
    const updatedOptions = currentOptions.includes(value)
      ? currentOptions.filter((option) => option !== value)
      : [...currentOptions, value];

    selectedOptions.update(() => updatedOptions);

    dispatch('item-selected', { value });
  };
</script>

<input
  class={componentClass}
  type="checkbox"
  name={labelText}
  id={labelText}
  data-testid="dropdown-item"
  {...$$restProps}
/>

<label for={labelText} on:click={() => onSelectItem(value)}>
  {#if icon}
    <span class={icon} />
  {/if}

  {labelText}
</label>

{#if divider}
  <VtmnDivider orientation="horizontal" />
{/if}

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
