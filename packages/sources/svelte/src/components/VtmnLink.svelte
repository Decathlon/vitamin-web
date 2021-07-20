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
  export let standalone = false;

  /**
   * Whether link has an icon or not.
   * @type {boolean}
   * @default false
   */
   export let iconAlong = false;
</script>

<a
  class={['vtmn-link', `vtmn-link_size--${size}`, standalone && 'vtmn-link--standalone', (standalone && iconAlong) && 'vtmn-link--icon-along'].filter(Boolean).join(' ')}
  {...$$props}>
  <slot></slot>
</a>
