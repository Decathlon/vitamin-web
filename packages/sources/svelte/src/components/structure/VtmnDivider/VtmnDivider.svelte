<script>
  import { cn } from '../../../utils/classnames';

  import { VTMN_DIVIDER_ORIENTATION, VTMN_DIVIDER_POSITION } from './enums';

  /**
   * @type {string} Orientation of the divider
   */
  export let orientation = VTMN_DIVIDER_ORIENTATION.HORIZONTAL;

  /**
   * @type {string} Position of the text
   */
  export let textPosition = VTMN_DIVIDER_POSITION.START;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-divider',
    `vtmn-divider_orientation--${orientation}`,
    textPosition && `vtmn-divider_text-position--${textPosition}`,
    className,
  );
</script>

<div class={componentClass} role="separator" aria-orientation={orientation}>
  <slot />
</div>

<style>
  @import '@vtmn/css-divider';
</style>
