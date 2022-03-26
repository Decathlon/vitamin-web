<script>
  import { VTMN_TOGGLE_SIZE } from './enums';
  import { cn } from '../../../utils/classnames';

  /**
   * ID of the toggle and associated label
   * @type {string}
   * @requires
   */
  export let id;

  /**
   * @type {boolean} Define if the toggle is checked or not
   * @default false
   */
  export let checked = false;

  /**
   * @type {boolean} The disabled state of the toggle
   * @default false
   */
  export let disabled = false;

  /**
   * @type {'small'|'medium'} Size of the component
   * @default medium
   */
  export let size = VTMN_TOGGLE_SIZE.MEDIUM;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-toggle', `vtmn-toggle_size--${size}`, className);
</script>

<div class={componentClass}>
  <div class="vtmn-toggle_switch">
    <input type="checkbox" {id} {disabled} bind:checked />
    <span aria-hidden="true" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style lang="css">
  @import '@vtmn/css-toggle';
</style>
