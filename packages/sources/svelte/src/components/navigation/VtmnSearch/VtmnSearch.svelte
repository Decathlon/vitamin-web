<script>
  import { cn } from '../../../utils/classnames';

  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import { VTMN_SEARCH_VARIANT, VTMN_SEARCH_SIZE } from './enums';

  /** @restProps { button } */

  /**
   * The variant of the button.
   * @type {'default' | 'persistent' | 'on-content'}
   * @defaultValue 'default'
   */
  export let variant = VTMN_SEARCH_VARIANT.DEFAULT;

  /**
   * @type {boolean} disabled.
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * @type {'small' | 'medium'}
   * @defaultValue 'medium'
   */
  export let size = VTMN_SEARCH_SIZE.MEDIUM;

  /**
   * The value of the input
   * @type {string}
   */
  export let value;

  /**
   * Reference of the search input
   * @type {HTMLElement}
   */
  export let inputRef;

  /**
   * @typedef AriaLabels
   * @type {object}
   * @property {string} clearButton - Aria label of the clear button.
   * @property {string} searchButton - Aria label of the search button.
   */

  /**
   * @type {AriaLabels} Aria labels of the component.
   */
  export let ariaLabels = {};

  /**
   * Custom classes to apply to the component.
   * @type {string}
   */
  export let className = undefined;

  const dispatch = createEventDispatcher();

  const resetInputValue = () => {
    value = '';
  };

  const onSearch = () => {
    dispatch('search', {
      text: value,
    });
  };

  $: componentClass = cn(
    'vtmn-search',
    variant && `vtmn-search_variant--${variant}`,
    size && `vtmn-search_size--${size}`,
    className,
  );
</script>

<div class={componentClass} role="search">
  <input
    type="search"
    bind:this={inputRef}
    {...$$restProps}
    on:click
    on:input
    on:mouseover
    on:mouseenter
    on:mouseout
    on:focus
    on:blur
    on:keydown
    on:keypress
    on:keyup
    bind:value
    {disabled}
  />

  <div class="vtmn-search_buttons">
    {#if value}
      <VtmnButton
        iconAlone="close-line"
        variant="ghost"
        {disabled}
        {size}
        on:click={resetInputValue}
        aria-label={ariaLabels.clearButton}
        aria-disabled={disabled}
      />
    {/if}

    <VtmnButton
      iconAlone="search-line"
      variant="ghost"
      {disabled}
      {size}
      on:click={onSearch}
      type="submit"
      aria-label={ariaLabels.searchButton}
    />
  </div>
</div>

<style lang="css">
  @import '@vtmn/css-search';
</style>
