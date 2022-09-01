<script>
  import { cn } from '../../../utils/classnames';
  import {
    VTMN_SKELETON_SHAPE,
    VTMN_SKELETON_UNIT,
    VTMN_DEFAULT_DEFAULT__WIDTH,
  } from './enums';
  import { objectToStyle } from '../../../utils/style';

  /**
   * @type {number} Width applied on the skeleton.
   * @defaultValue 100
   */
  export let width = VTMN_DEFAULT_DEFAULT__WIDTH;

  /**
   * @type {'%'|'rem'|'em'|'px'|'vw'|'ch'} Unit applied on the width.
   * @defaultValue %
   */
  export let unit = VTMN_SKELETON_UNIT.PERCENT;

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
    if (
      width < 0 ||
      (unit && !Object.values(VTMN_SKELETON_UNIT).includes(unit))
    ) {
      computedWidth = 100;
      computedUnit = VTMN_SKELETON_UNIT.PERCENT;
      console.warn(
        '[VtmnSkeleton] property width or unit are wrong. Set to default value',
      );
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
