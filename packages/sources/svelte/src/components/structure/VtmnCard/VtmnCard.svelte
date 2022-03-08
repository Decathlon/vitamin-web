<script>
  import { VARIANTS } from './enums';
  import { cn } from '../../../utils/classnames';

  export let img = '';
  export let title = '';

  export let variant = VARIANTS.TOP_IMAGE;
  export let fullImage = false;
  export let contentOpaque = false;

  let className;
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
    variant === VARIANTS.TOP_IMAGE && fullImage && 'vtmn-card_image--full',
  );

  $: componentContentClass = cn(
    'vtmn-card_content',
    variant === VARIANTS.FULL_IMAGE &&
      contentOpaque &&
      'vtmn-card_content--opaque',
  );
</script>

<div class={componentClass}>
  {#if img}
    <div class={componentImageClass}>
      <img src={img} alt="" />
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
