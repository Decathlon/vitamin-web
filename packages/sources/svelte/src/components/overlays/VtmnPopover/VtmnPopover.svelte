<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_POPOVER_POSITION } from './enums';

  /**
   * ID of the popover
   * @type {string}
   */
  export let id;

  /** @type {'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'} */
  export let position = VTMN_POPOVER_POSITION.TOP;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-popover', className);
</script>

<div
  class={componentClass}
  data-position={position}
  aria-describedby={id}
  tabindex="0"
  {...$$restProps}
>
  <slot />

  <div {id} role="tooltip">
    <p class="vtmn-popover_title"><slot name="title" /></p>
    <p class="vtmn-popover_text"><slot name="body" /></p>
  </div>
</div>

<style lang="css">
  @import '@vtmn/css-popover';
</style>
