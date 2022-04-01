<script>
  import { createEventDispatcher } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import VtmnDivider from '../../structure/VtmnDivider/VtmnDivider.svelte';

  /** @restProps */

  export let id;

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

  export let group = [];

  export { className as class };

  $: componentClass = cn(className);

  let currentOptions;
</script>

<input
  bind:group
  type="checkbox"
  {id}
  {value}
  data-testid="dropdown-item"
  {...$$restProps}
/>

<label for={id}>
  {#if icon}
    <span class={icon} />
  {/if}

  <slot />
</label>

{#if divider}
  <VtmnDivider orientation="horizontal" />
{/if}

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
