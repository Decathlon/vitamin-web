<script>
  import { cn } from '../../../utils/classnames';
  import { createEventDispatcher } from 'svelte';

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
   * Custom classes to apply to the component.
   * @type {array} options
   */
  export let options;

  $: componentClass = cn('vtmn-dropdown', className);

  const dispatch = createEventDispatcher();

  let selectedOptions = [];

  const onClick = (value) => {
    selectedOptions = [...selectedOptions, value];

    dispatch('item-selected', {
      selectedOptions,
    });
  };
</script>

<div class={componentClass} {...$$restProps}>
  {#if label}
    <div class="vtmn-dropdown_label">{label}</div>
  {/if}

  <details>
    <summary aria-labelledby="dropdown-label-1">{defaultOption}</summary>

    <div class="vtmn-dropdown_items">
      {#each options as option (option.label)}
        <input type="checkbox" name={option.label} id={option.label} />
        <label for={option.label} on:click={() => onClick(option.value)}
          >{option.label}</label
        >
      {/each}
    </div>
  </details>
</div>

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
