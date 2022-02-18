<script>
  import { cn } from '../../../utils/classnames';

  /**
   * ID of the checkbox
   * @type {string}
   */
  export let id;

  /**
   * Label of the checkbox
   * @type {string}
   */
  export let label;

  /**
   * Whether the checkbox is disabled
   * @type {boolean}
   */
  export let disabled;

  let className;
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
  {disabled}
  {...$$restProps}
/>
<label for={id}>{label}</label>

<style lang="css">
  @import '@vtmn/css-checkbox';
</style>
