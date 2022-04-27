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

  /**
   * @type {string} Id of the labelText
   */
  export let ariaLabelId = undefined;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-divider',
    `vtmn-divider_orientation--${orientation}`,
    $$slots.default && `vtmn-divider_text-position--${textPosition}`,
    className,
  );
</script>

<div
  class={componentClass}
  role="separator"
  aria-orientation={orientation}
  aria-labelledby={ariaLabelId}
  {...$$restProps}
>
  <span id={ariaLabelId}><slot /></span>
</div>

<style>
  @import '@vtmn/css-divider';
</style>
