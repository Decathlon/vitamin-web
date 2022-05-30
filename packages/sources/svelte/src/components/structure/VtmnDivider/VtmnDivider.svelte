<script>
  import { cn } from '../../../utils/classnames';

  import {
    VTMN_DIVIDER_ORIENTATION,
    VTMN_DIVIDER_TEXT_POSITION,
  } from './enums';

  /**
   * @type {string} Orientation of the divider
   */
  export let orientation = VTMN_DIVIDER_ORIENTATION.HORIZONTAL;

  /**
   * @type {string} Position of the text
   */
  export let textPosition = VTMN_DIVIDER_TEXT_POSITION.START;

  let className = undefined;

  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-divider',
    `vtmn-divider_orientation--${orientation}`,
    $$restProps['slot'] && `vtmn-divider_text-position--${textPosition}`,
    className,
  );
</script>

<div
  class={componentClass}
  role="separator"
  aria-orientation={orientation}
  {...$$restProps}
>
  {#if $$restProps['slot']}
    <span id={$$restProps['aria-labelledby'] || undefined}>
      {$$restProps['slot']}
    </span>
  {/if}
</div>

<style>
  @import '@vtmn/css-divider';
</style>
