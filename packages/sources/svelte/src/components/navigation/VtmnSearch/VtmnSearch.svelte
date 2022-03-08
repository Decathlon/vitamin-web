<script>
  import { cn } from '../../../utils/classnames';

  import { VtmnButton } from '@vtmn/svelte';
  import { createEventDispatcher } from 'svelte';
  import { VtmnSearchVariant, VtmnSearchSize } from './enums';

  /** @restProps { button } */

  /**
   * The variant of the button.
   * @type {'default' | 'ghost' | 'persistent' | 'on-content'}
   * @defaultValue 'default'
   */
  export let variant = VtmnSearchVariant.VTMN_DEFAUT;

  /**
   * @type {boolean} disabled.
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * @type {'small' | 'medium'}
   * @defaultValue 'medium'
   */
  export let size = VtmnSearchSize.VTMN_MEDIUM;

  /**
   * The value of the input
   * @type {string}
   */
  export let value;

  /**
   * Custom classes to apply to the component.
   * @type {string}
   */
  export let className;

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

<form
  class={componentClass}
  action=""
  role="search"
  aria-controls="search-result"
  on:submit|preventDefault={onSearch}
>
  <input
    type="search"
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
    <VtmnButton
      iconAlone="close-line"
      variant="ghost"
      {disabled}
      {size}
      on:click={resetInputValue}
      aria-label="close"
      aria-disabled={disabled}
    />

    <VtmnButton
      iconAlone="search-line"
      variant="ghost"
      {disabled}
      {size}
      type="submit"
      aria-label="search"
    />
  </div>
</form>

<style lang="css">
  @import '@vtmn/css-search';
</style>
