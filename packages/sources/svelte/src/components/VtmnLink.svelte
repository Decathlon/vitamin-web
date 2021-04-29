<script>
  import '@vtmn/css-link';

  /**
   * The size of the link.
   * @type {string}
   * @default 'medium'
   */
  export let size = 'medium';

  /**
   * Whether link is standalone or not.
   * @type {boolean}
   * @default false
   */
  export let isStandalone = false;
</script>

<a
  class={['vtmn-link', `vtmn-link_size--${size}`, isStandalone && 'vtmn-link--standalone'].filter(Boolean).join(' ')}
  {...$$restProps}>
  <slot></slot>
</a>
