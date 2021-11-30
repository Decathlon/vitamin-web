<script>
  import '@vtmn/css-button';
  import { cn } from '../utils/classnames';

  /** @restProps { button } */

  /**
   * The variant of the button.
   * @type {'primary' | 'primary-reversed' | 'secondary' | 'tertiary' | 'ghost' | 'ghost-reversed' | 'conversion'}
   * @defaultValue 'primary'
   */
  export let variant = 'primary';
  /**
   * The size of the button.
   * @type {'small' | 'medium' | 'large' | 'stretched'}
   * @defaultValue 'medium'
   */
  export let size = 'medium';

  /**
   * Icon to display on the left hand side of button
   * @type string
   * @defaultValue undefined
   */
  export let iconLeft = undefined;

  /**
   * Icon to display on the right hand side of button
   * @type string
   * @defaultValue undefined
   */
  export let iconRight = undefined;

  /**
   * Icon to display when it is a button with icon only
   * @type string
   * @defaultValue undefined
   */
  export let iconAlone = undefined;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-btn',
    variant && `vtmn-btn_variant--${variant}`,
    size && `vtmn-btn_size--${size}`,
    !iconAlone && iconLeft && 'vtmn-btn--icon-left',
    !iconAlone && iconRight && 'vtmn-btn--icon-right',
    iconAlone && 'vtmn-btn--icon-alone',
    className,
  );
</script>

<button on:click type="button" class={componentClass} {...$$restProps}>
  {#if !iconAlone && iconLeft}
    <span class={`vtmx-${iconLeft}`} />
  {/if}
  {#if iconAlone}
    <span class={`vtmx-${iconAlone}`} />
  {:else}
    <slot />
  {/if}
  {#if !iconAlone && iconRight}
    <span class={`vtmx-${iconRight}`} />
  {/if}
</button>
