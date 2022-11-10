<script>
  import { VTMN_CARD_VARIANT } from './enums';
  import { cn } from '../../../utils/classnames';

  /**
   * @type {string} title of the card
   */
  export let title = undefined;

  /**
   * @type {'top-image' | 'side-image' | 'full-image' } variant of the card
   */
  export let variant = VTMN_CARD_VARIANT.TOP_IMAGE;

  /**
   * @type {boolean} display image on full screen.
   * Only for variant 'top-image'
   */
  export let fullImage = false;

  /**
   * @type {boolean} display the content with opaque style
   * Only for variant 'full-image'
   */
  export let contentOpaque = false;

  /**
   * @type {'span'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} Title displayed element
   * @default span
   */
  export let titleElement = 'span';

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-card',
    variant && `vtmn-card_variant--${variant}`,
    className,
  );

  $: componentImageClass = cn(
    'vtmn-card_image',
    variant === VTMN_CARD_VARIANT.TOP_IMAGE &&
      fullImage &&
      'vtmn-card_image--full',
  );

  $: componentContentClass = cn(
    'vtmn-card_content',
    variant === VTMN_CARD_VARIANT.FULL_IMAGE &&
      contentOpaque &&
      'vtmn-card_content--opaque',
  );
</script>

<div class={componentClass}>
  {#if $$slots.img}
    <div class={componentImageClass}>
      <slot name="img" />
    </div>
  {/if}
  <div class={componentContentClass}>
    {#if title}
      <svelte:element this={titleElement} class="vtmn-card_content--title"
        >{title}</svelte:element
      >
    {/if}
    {#if $$slots.content}
      <span class="vtmn-card_content--body">
        <slot name="content" />
      </span>
    {/if}
    <slot name="actions" />
  </div>
</div>

<style>
  @import '@vtmn/css-card';
</style>
