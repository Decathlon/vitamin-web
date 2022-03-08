<script>
  import { VtmnButton } from '@vtmn/svelte';
  import { createEventDispatcher } from 'svelte';

  /** @restProps { button } */

  /**
   * The variant of the button.
   * @type {'default' | 'ghost' | 'persistent' | 'on-content'}
   * @defaultValue 'default'
   */
  export let variant = 'default';

  /**
   * @type {boolean} disabled.
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * @type {'small' | 'medium'}
   * @defaultValue 'medium'
   */
  export let size = 'medium';

  /**
   * The value of the input
   * @type {string}
   */
  export let value;

  const dispatch = createEventDispatcher();

  const resetInputValue = () => {
    value = '';
  };

  const onSearch = () => {
    dispatch('search', {
      text: value,
    });
  };
</script>

<form
  class={`vtmn-search vtmn-search_size--${size} vtmn-search_variant--${variant}`}
  action=""
  role="search"
  aria-controls="search-result"
  on:submit|preventDefault={onSearch}
>
  <input
    type="search"
    {...$$restProps}
    on:click
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
