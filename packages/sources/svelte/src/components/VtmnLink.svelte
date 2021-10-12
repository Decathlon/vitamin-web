<script>
  import '@vtmn/css-link';
  import { cn } from '../utils/classnames';

  /** @restProps { a } */

  /**
   * The size of the link.
   * @type {string}
   * @defaultValue 'medium'
   */
  export let size = 'medium';

  /**
   * Whether link is standalone or not.
   * @type {boolean}
   * @defaultValue false
   */
  export let standalone = false;

  /**
   * Whether link has an icon or not.
   * @type {boolean}
   * @defaultValue false
   */
  export let iconAlong = false;

  let className;
  /**
   * @type {string} A custom class to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-link',
    size && `vtmn-link_size--${size}`,
    standalone && 'vtmn-link--standalone',
    standalone && iconAlong && 'vtmn-link--icon-along',
    className,
  );
</script>

<a class={componentClass} {...$$restProps}>
  <slot />
</a>
