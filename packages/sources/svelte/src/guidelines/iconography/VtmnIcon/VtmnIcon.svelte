<script>
  import { cn } from '../../../utils/classnames';
  import { objectToStyle } from '../../../utils/style';
  import { VARIANT } from './enums';

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
  export let variant = VARIANT.DEFAULT;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  const retrieveSemanticColor = (variant) => {
    switch (variant) {
      case VARIANT.BRAND:
        return 'background-brand-primary';
      case VARIANT.REVERSED:
        return 'content-primary-reversed';
      case VARIANT.POSITIVE:
        return 'content-positive';
      case VARIANT.INFORMATION:
        return 'content-information';
      case VARIANT.WARNING:
        return 'content-warning';
      case VARIANT.NEGATIVE:
        return 'content-negative';
      case VARIANT.DEFAULT:
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

<style>
  @import '@vtmn/icons/dist/vitamix/font/vitamix.css';
</style>
