<script>
  import { cn } from '../../../utils/classnames';
  import { VtmnTagVariant } from './enums';

  /**
   * The variant of the tag
   * @type {'accent' | 'alert' | 'brand' | 'decorative_gravel' | 'decorative_brick' |'decorative_saffron' | 'decorative_gold' | 'decorative_jade' | 'decorative_emerald' | 'decorative_cobalt' | 'decorative_amethyst'}
   */
  export let variant = VtmnTagVariant.ACCENT;

  /**
   * The href that makes the tag interactive.
   * @type {string}
   */
  export let href;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-tag',
    variant && `vtmn-tag_variant--${variant}`,
    className,
  );
</script>

{#if href}
  <a {href} class={componentClass} {...$$restProps}><slot /></a>
{:else}
  <span class={componentClass} {...$$restProps}><slot /></span>
{/if}

<style lang="css">
  @import '@vtmn/css-tag';
</style>
