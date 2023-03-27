<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_SKELETON_SHAPE, VTMN_SKELETON_DEFAULT_WIDTH } from './enums';
  import { objectToStyle } from '../../../utils/style';

  /**
   * @type {string} Width applied on the skeleton.
   * @defaultValue 100%
   */
  export let width = VTMN_SKELETON_DEFAULT_WIDTH;

  /**
   * @type {string} Height applied on the skeleton.
   */
  export let height = undefined;

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
    height && `skeleton-height`,
    className,
  );

  $: componentStyle = objectToStyle({
    '--skeleton-width': width,
    '--skeleton-height': height,
  });
</script>

<span class={componentClass} style={componentStyle} {...$$restProps} />

<style lang="css">
  @import '@vtmn/css-skeleton';
  .skeleton-width {
    width: var(--skeleton-width, 100%);
  }

  .skeleton-height {
    height: var(--skeleton-height);
  }
</style>
