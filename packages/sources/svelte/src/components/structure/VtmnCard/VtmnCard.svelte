<script>
  import { cn } from '../../../utils/classnames';

  export let img = '';
  export let title = '';

  export let variant = 'top-image'; // side-image | full-image
  export let fullImage = false;

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
    variant === 'top-image' && fullImage && 'vtmn-card_image--full',
  );
</script>

<div class={componentClass}>
  {#if img}
    <div class={componentImageClass}>
      <img src={img} alt="" />
    </div>
  {/if}
  <div class="vtmn-card_content">
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
