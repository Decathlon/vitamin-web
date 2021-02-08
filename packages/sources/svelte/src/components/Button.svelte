<script>
  import '@vtmn/css-button/dist/index.css';
  /**
   * The variant of the button.
   * @type {'primary' | 'primary-reversed' | 'secondary' | 'secondary-reversed' | 'ghost' | 'conversion'}
   * @default 'primary'
   */
  export let variant;
  /**
   * The size of the button.
   * @type {'small' | 'medium' | 'large' | 'stretched'}
   * @default 'medium'
   */
  export let size = 'medium';
</script>

<button
  type="button"
  class={['vtmn-btn', `vtmn-btn_variant--${variant}`, `vtmn-btn_size--${size}`].join(' ')}
  {...$$restProps}>
  <slot></slot>
</button>
