<script>
  import '@vtmn/css-popover';
  import { cn } from '../utils/classnames';
  import { VTMN_POPOVER_POSITION } from '../utils/enums';

  /** @type {string} - An unique id */
  export let identifier = '';
  /** @type {VTMN_POPOVER_POSITION} */
  export let position = VTMN_POPOVER_POSITION.BOTTOM;

  let className;
  /**
   * @type {string} A custom class to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-popover', className);
</script>

<div
  class={componentClass}
  data-position={position}
  aria-describedby={identifier}
  tabindex="0"
  {...$$restProps}
>
  <slot name="placeholder" />

  <div id={identifier} role="tooltip">
    <p class="vtmn-popover_title"><slot name="title" /></p>
    <p class="vtmn-popover_text"><slot name="body" /></p>
  </div>
</div>
