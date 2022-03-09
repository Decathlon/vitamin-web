<script>
  import { VTMN_CARD_VARIANTS } from './enums';
  import { cn } from '../../../utils/classnames';

  /**
   * @type {string} title of the card
   */
  export let title = '';

  /**
   * @type {'top-image' | 'side-image' | 'full-image' } variant of the card
   */
  export let variant = VTMN_CARD_VARIANTS.TOP_IMAGE;

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

  let className = '';
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
    variant === VTMN_CARD_VARIANTS.TOP_IMAGE &&
      fullImage &&
      'vtmn-card_image--full',
  );

  $: componentContentClass = cn(
    'vtmn-card_content',
    variant === VTMN_CARD_VARIANTS.FULL_IMAGE &&
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
      <span class="vtmn-card_content--title">{title}</span>
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
