<script>
  import { cn } from '../../../utils/classnames';
  import VtmnDivider from '../../structure/VtmnDivider/VtmnDivider.svelte';
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';

  /**
   * @type {string} if of the item
   * @requires
   */
  export let id;

  /**
   * @type {object} Value of the dropdown item
   * @requires
   */
  export let value;

  /**
   * @type {object[]} Array of selected items
   * @requires
   */
  export let group;

  /**
   * @type {boolean} If the dropdown item are selected
   */
  export let selected = false;

  /**
   * @type {boolean} Apply divider on the item
   * @defaultValue false
   */
  export let divider = false;

  /**
   * @type {string} Icon of menu item.
   */
  export let icon = undefined;
  /**
   * Custom classes to apply to the component.
   * @type {string} className
   */
  let className = undefined;

  export { className as class };
  $: componentClass = cn(className);

  const updateChekbox = (group) => (selected = group.indexOf(value) >= 0);

  const updateGroup = (selected) => {
    const index = group.indexOf(value);
    if (selected) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
      return;
    }
    if (index >= 0) {
      group.splice(index, 1);
      group = group;
    }
  };

  $: group && updateChekbox(group);
  $: group && updateGroup(selected);
</script>

<input
  type="checkbox"
  {id}
  class={componentClass}
  bind:checked={selected}
  on:change
  {value}
  {...$$restProps}
/>

<label for={id}>
  {#if icon}
    <VtmnIcon value={icon} />
  {/if}

  <slot />
</label>

{#if divider}
  <VtmnDivider orientation="horizontal" role="separator" />
{/if}

<style lang="css">
  @import '@vtmn/css-dropdown';
</style>
