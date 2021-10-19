<script context="module">
  /** @enum */
  export const POSITION = {
    TOP_LEFT: 'top-left',
    TOP: 'top',
    TOP_RIGHT: 'top-right',
    RIGHT: 'right',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM: 'bottom',
    BOTTOM_LEFT: 'bottom-left',
    LEFT: 'left',
  };

  /** @type {POSITION} */
  export const DEFAULT_POSITION = POSITION.BOTTOM;
</script>

<script>
  import '@vtmn/css-popover';
  import { cn } from '../utils/classnames';

  /** @type {string} - An unique id */
  export let identifier = '';
  /** @type {POSITION} */
  export let position = DEFAULT_POSITION;

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
