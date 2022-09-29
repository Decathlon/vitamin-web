<script>
  import { cn } from '../../../utils/classnames';
  import VtmnDivider from '../../structure/VtmnDivider/VtmnDivider.svelte';
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

<div class={componentClass} role="tablist" {...$$restProps}>
  <slot />
</div>
<VtmnDivider />

<style lang="css">
  @import '@vtmn/css-tabs';
</style>
