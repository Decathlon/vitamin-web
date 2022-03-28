<script>
  import { cn } from '../../../utils/classnames';

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-list', className);
</script>

<ul class={componentClass} role="listbox" {...$$restProps}>
  <slot />
</ul>

<style lang="css">
  @import '@vtmn/css-list';
</style>
