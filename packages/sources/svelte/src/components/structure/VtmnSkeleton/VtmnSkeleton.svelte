<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_SKELETON_SHAPE } from './enums';
  import { objectToStyle } from '../../../utils/style';

  // width
  export let width = 0;
  export let shape = VTMN_SKELETON_SHAPE.LINE;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };
  $: componentClass = cn(
    'vtmn-skeleton',
    shape && `vtmn-skeleton_${shape}`,
    width && `skeleton-width`,
    className,
  );

  $: componentStyle = objectToStyle({
    '--skeleton-width': `${width}%`,
  });
</script>

<span class={componentClass} style={componentStyle} />

<style lang="css">
  @import '@vtmn/css-skeleton';
  .skeleton-width {
    width: var(--skeleton-width, 0);
  }
</style>
