<script>
  import { cn } from '../../../utils/classnames';

  /**
   * ID of the toggle
   * @type {string}
   */
  export let id;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-toggle', className);
</script>

<div
  class={componentClass}
  aria-describedby={id}
  tabindex="0"
  {...$$restProps}
/>

<style lang="css">
  @import '@vtmn/css-toggle';
</style>
