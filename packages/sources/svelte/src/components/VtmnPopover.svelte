<script>
  import { cn } from '../utils/classnames';
  import { VTMN_POPOVER_POSITION } from '../utils/enums';

  /**
   * ID of the popover
   * @type {string}
   */
  export let id;
  /** @type {VTMN_POPOVER_POSITION} */
  export let position = VTMN_POPOVER_POSITION.BOTTOM;

  let className;
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
  <slot name="placeholder" />

  <div {id} role="tooltip">
    <p class="vtmn-popover_title"><slot name="title" /></p>
    <p class="vtmn-popover_text"><slot name="body" /></p>
  </div>
</div>

<style lang="css">
  @import '@vtmn/css-popover';
</style>
