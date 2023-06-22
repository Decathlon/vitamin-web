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
  $: componentClass = cn('vtmn-icon-size', className);
  $: {
    const style = {
      '--vtmn-icon-size': `${size}px`,
    };
    if (variant) {
      style[
        '--vtmn-icon-semantic-color'
      ] = `var(--vtmn-semantic-color_${retrieveSemanticColor(variant)}-filter)`;
    }
    componentStyle = objectToStyle(style);
  }
</script>

{#if value}
  {#await import(`@vtmn/icons/dist/vitamix/svg/${value}.svg`) then { default: src }}
    <img
      alt=""
      style={componentStyle}
      {src}
      data-icon={value}
      class={componentClass}
      {...$$restProps}
    />
  {/await}
{/if}

<style>
  .vtmn-icon-size {
    width: var(--vtmn-icon-size);
    height: var(--vtmn-icon-size);
    filter: var(--vtmn-icon-semantic-color);
  }
</style>
