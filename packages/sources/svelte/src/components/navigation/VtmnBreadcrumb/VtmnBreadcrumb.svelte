<script>
  import { cn } from '../../../utils/classnames';
  /** @restProps */

  /**
   * Custom classes to apply to the component.
   * @type {string}
   */
  export let className = undefined;

  $: componentClass = cn('vtmn-breadcrumb', className);
</script>

<nav class={componentClass} {...$$restProps}>
  <ol>
    <slot />
  </ol>
</nav>

<style lang="css">
  @import '@vtmn/css-breadcrumb';
</style>
