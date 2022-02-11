<script>
  import { cn } from '../../../utils/classnames';
  import { VARIANT } from './enums';

  /**
   * ID of the price
   * @type {string}
   * @defaultValue undefined
   */
  export let id;

  /**
   * Label apply on the component
   * @type {string}
   * @defaultValue undefined
   */
  export let label;

  /**
   * Size of the price
   * @type {'small' | 'medium' | 'large' }
   * @defaultValue undefined
   */
  export let size;

  /**
   * Variant of the price
   * @type {'default' | 'accent' | 'alert' | 'strikethrough'}
   * @defaultValue 'default'
   */
  export let variant = VARIANT.DEFAULT;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-price',
    size && `vtmn-price_size--${size}`,
    variant && `vtmn-price_variant--${variant}`,
    className,
  );
</script>

<span {id} class={componentClass} aria-label={label}>
  <slot />
</span>

<style lang="css">
  @import '@vtmn/css-price';
</style>
