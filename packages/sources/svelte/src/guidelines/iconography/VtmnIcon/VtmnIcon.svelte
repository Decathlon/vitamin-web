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
  export let variant = VTMN_ICON_VARIANT.DEFAULT;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  const retrieveSemanticColor = (variant) => {
    switch (variant) {
      case VTMN_ICON_VARIANT.BRAND_PRIMARY:
        return 'background-brand-primary';
      case VTMN_ICON_VARIANT.REVERSED:
        return 'content-primary-reversed';
      case VTMN_ICON_VARIANT.POSITIVE:
        return 'content-positive';
      case VTMN_ICON_VARIANT.INFORMATION:
        return 'content-information';
      case VTMN_ICON_VARIANT.WARNING:
        return 'content-warning';
      case VTMN_ICON_VARIANT.NEGATIVE:
        return 'content-negative';
      case VTMN_ICON_VARIANT.DEFAULT:
      default:
        return 'content-primary';
    }
  };

  $: componentClass = cn(`vtmx-${value}`, className);
  $: componentStyle = objectToStyle({
    color: `var(--vtmn-semantic-color_${retrieveSemanticColor(variant)})`,
    'font-size': `${size}px`,
  });
</script>

<span class={componentClass} style={componentStyle} />
