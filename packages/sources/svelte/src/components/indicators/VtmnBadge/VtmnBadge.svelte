<script>
  import { cn } from '../../../utils/classnames';
  import { VARIANT } from './enums';
  /**
   * The value of the badge
   * @type {number}
   */
  export let value;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  /**
   * The value of the badge
   * @type {'default' | 'brand' | 'reversed' | 'accent' | 'alert'}
   */
  export let variant = VARIANT.DEFAULT;

  $: computedValue = value > 99 ? '99+' : value;

  $: componentClass = cn(
    'vtmn-badge',
    variant && `vtmn-badge_variant--${variant}`,
    className,
  );
</script>

<span class={componentClass} {...$$restProps}>{computedValue || ''}</span>

<style lang="css">
  @import '@vtmn/css-badge';
</style>
