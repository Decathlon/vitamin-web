<script>
  import '@vtmn/css-button/dist/index.css';

  /**
   * The variant of the button.
   * @type {'primary' | 'primary-reversed' | 'secondary' | 'secondary-reversed' | 'ghost' | 'conversion'}
   * @default 'primary'
   */
  export let variant = 'primary';
  /**
   * The size of the button.
   * @type {'small' | 'medium' | 'large' | 'stretched'}
   * @default 'medium'
   */
  export let size = 'medium';

  /**
   * Icon to display on the left hand side of button
   * @type string
   * @default undefined and therefore not displayed by default
   */
  export let iconLeft;

  /**
   * Icon to display on the right hand side of button
   * @type string
   * @default undefined and therefore not displayed by default
   */
  export let iconRight;

  /**
   * Icon to display when it is a button with icon only
   * @type string
   * @default undefined and therefore not displayed by default
   */
  export let iconAlone;
</script>

<button
  type="button"
  class={['vtmn-btn',
    `vtmn-btn_variant--${variant}`,
    `vtmn-btn_size--${size}`,
    !iconAlone && iconLeft ? 'vtmn-btn--icon-left' : '',
    !iconAlone && iconRight ? 'vtmn-btn--icon-right' : '',
    iconAlone ? 'vtmn-btn--icon-alone' : '']
    .join(' ')}
  {...$$props}>
  {#if !iconAlone && iconLeft}
    <span class={`vtmx-${iconLeft}`}></span>
  {/if}
  {#if iconAlone}
    <span class={`vtmx-${iconAlone}`}></span>
  {:else}
    <slot></slot>
  {/if}
  {#if !iconAlone && iconRight}
    <span class={`vtmx-${iconRight}`}></span>
  {/if}
</button>
