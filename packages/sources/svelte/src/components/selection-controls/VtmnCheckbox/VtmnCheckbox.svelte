<script>
  import { cn } from '../../../utils/classnames';

  /**
   * ID of the checkbox and associated label
   * @type {string}
   */
  export let id;

  /**
   * Whether the checkbox is checked
   * @type {boolean}
   */
  export let checked = false;

  /**
   * Whether the checkbox is disabled
   * @type {boolean}
   */
  export let disabled = false;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-checkbox', className);
</script>

<input
  class={componentClass}
  type="checkbox"
  {id}
  bind:checked
  {disabled}
  {...$$restProps}
/>
<label for={id}><slot /></label>

<style lang="css">
  @import '@vtmn/css-checkbox';
</style>
