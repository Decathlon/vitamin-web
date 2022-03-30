<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_TAG_VARIANT } from './enums';
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';

  /**
   * The variant of the tag
   * @type {'accent' | 'alert' | 'brand' | 'decorative_gravel' | 'decorative_brick' |'decorative_saffron' | 'decorative_gold' | 'decorative_jade' | 'decorative_emerald' | 'decorative_cobalt' | 'decorative_amethyst'}
   */
  export let variant = VTMN_TAG_VARIANT.ACCENT;

  /**
   * The icon to display at the start side of the tag.
   * Only for 'input' variant
   */
  export let icon = undefined;

  /**
   * The href that makes the tag interactive.
   * @type {string}
   */
  export let href = undefined;

  let className = undefined;
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
  <a {href} class={componentClass} {...$$restProps}>
    {#if icon}
      <VtmnIcon value={icon} aria-hidden="true" />
    {/if}
    <slot />
  </a>
{:else}
  <span class={componentClass} {...$$restProps}>
    {#if icon}
      <VtmnIcon value={icon} aria-hidden="true" />
    {/if}
    <slot />
  </span>
{/if}

<style lang="css">
  @import '@vtmn/css-tag';
</style>
