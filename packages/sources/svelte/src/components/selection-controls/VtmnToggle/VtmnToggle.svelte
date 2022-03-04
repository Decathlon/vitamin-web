<script>
  import { SIZE } from './enums';
  import { cn } from '../../../utils/classnames';

  /**
   * ID of the toggle and associated label
   * @type {string}
   */
  export let id;

  /**
   * Define if the toggle is checked or not
   */
  export let checked = fase;

  /**
   * The disabled state of the toggle
   */
  export let disabled;

  /**
   * Size of the component
   */
  export let size = SIZE.MEDIUM;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-toggle', `vtmn-toggle_size--${size}`, className);
</script>

<div class={componentClass}>
  <div class="vtmn-toggle_switch">
    <input type="checkbox" {id} {disabled} {checked} />
    <span aria-hidden="true" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style lang="css">
  @import '@vtmn/css-toggle';
</style>
