<script>
  import { cn } from '../../../utils/classnames';
  import { objectToStyle } from '../../../utils/style';
  import { VTMN_ICON_VARIANT } from './enums';

  /**
   * The size of the icon in pixels.
   */
  export let size = 24;

  /**
   * The value of the icon.
   */
  export let value;

  /**
   * The variant of the icon.
   */
  export let variant = undefined;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  const retrieveSemanticColor = (variant) => {
    switch (variant) {
      case VTMN_ICON_VARIANT.DEFAULT:
        return 'content-primary';
      case VTMN_ICON_VARIANT.BRAND:
        return 'background-brand-primary';
      case VTMN_ICON_VARIANT.REVERSED:
        return 'content-primary-reversed';
      default:
        return `content-${variant}`;
    }
  };

  let componentStyle;
  $: componentClass = cn(`vtmx-${value}`, 'vtmn-icon-size', className);
  $: {
    const style = {
      '--vtmn-icon-size': `${size}px`,
    };
    if (variant) {
      style[
        '--vtmn-icon-semantic-color'
      ] = `var(--vtmn-semantic-color_${retrieveSemanticColor(variant)})`;
    }
    componentStyle = objectToStyle(style);
  }
</script>

<span class={componentClass} style={componentStyle} {...$$restProps} />

<style>
  @import '@vtmn/icons/dist/vitamix/font/vitamix.css';
  .vtmn-icon-size {
    color: var(--vtmn-icon-semantic-color);
    font-size: var(--vtmn-icon-size);
  }
</style>
