<script>
  import { cn } from '../../../utils/classnames';
  import {
    VTMN_SKELETON_SHAPE,
    VTMN_SKELETON_UNIT,
    VTMN_SKELETON_DEFAULT_UNIT,
    VTMN_SKELETON_DEFAULT_WIDTH,
  } from './enums';
  import { objectToStyle } from '../../../utils/style';

  /**
   * @type {number} Width applied on the skeleton.
   * @defaultValue 100
   */
  export let width = VTMN_SKELETON_DEFAULT_WIDTH;

  /**
   * @type {'%'|'rem'|'em'|'px'|'vw'|'ch'} Unit applied on the width.
   * @defaultValue %
   */
  export let unit = VTMN_SKELETON_DEFAULT_UNIT;

  /**
   * @type {'line' | 'avatar' } Variant of the shape.
   * @defaultValue line
   */
  export let shape = VTMN_SKELETON_SHAPE.LINE;

  /**
   * @type {string} Custom classes to apply to the component.
   */
  let className = undefined;

  export { className as class };
  $: componentClass = cn(
    'vtmn-skeleton',
    shape && `vtmn-skeleton_${shape}`,
    width && `skeleton-width`,
    className,
  );

  let computedUnit;
  let computedWidth;

  $: {
    if (width < 0 || !Object.values(VTMN_SKELETON_UNIT).includes(unit)) {
      computedWidth = VTMN_SKELETON_DEFAULT_WIDTH;
      computedUnit = VTMN_SKELETON_DEFAULT_UNIT;
    } else {
      computedWidth = width;
      computedUnit = unit;
    }
  }

  $: componentStyle = objectToStyle({
    '--skeleton-width': `${computedWidth}${computedUnit}`,
  });
</script>

<span class={componentClass} style={componentStyle} {...$$restProps} />

<style lang="css">
  @import '@vtmn/css-skeleton';
  .skeleton-width {
    width: var(--skeleton-width, 100%);
  }
</style>
