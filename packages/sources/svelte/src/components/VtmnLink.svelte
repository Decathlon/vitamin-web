<script>
  import { cn } from '../utils/classnames';

  /**
   * The href of the link.
   * @type {string}
   */
  export let href;

  /**
   * The target of the link.
   * @type {string}
   */
  export let target;

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
   * @type {string} Custom classes to apply to the component.
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

<a {href} {target} class={componentClass} {...$$restProps}><slot /></a>

<style lang="css">
  @import '@vtmn/css-link';
</style>
