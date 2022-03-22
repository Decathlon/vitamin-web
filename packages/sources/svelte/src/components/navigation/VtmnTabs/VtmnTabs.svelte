<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_TABS_ALIGN, VTMN_TABS_SIZE } from './enums';

  /**
   * @type {'start' | 'center' | 'end'}
   * @defaultValue 'start'
   */
  export let align = VTMN_TABS_ALIGN.START;

  /**
   * @type {'small' | 'medium'}
   * @defaultValue 'medium'
   */
  export let size = VTMN_TABS_SIZE.MEDIUM;

  /**
   * Custom classes to apply to the component.
   * @type {string}
   */
  export let className = '';

  $: componentClass = cn(
    'vtmn-tabs',
    align && `vtmn-tabs_align--${align}`,
    size && `vtmn-tabs_size--${size}`,
    className,
  );
</script>

<nav aria-label="Tabs list" class={componentClass}>
  <ul {...$$restProps}>
    <slot />
  </ul>
  <div class="vtmn-divider" role="separator" />
</nav>

<style lang="css">
  @import '@vtmn/css-tabs';
</style>
