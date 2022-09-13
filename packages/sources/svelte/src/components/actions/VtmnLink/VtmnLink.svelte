<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_LINK_SIZE } from './enums';

  /**
   * The href of the link.
   * @type {string}
   * @requires
   */
  export let href;

  /**
   * The target of the link.
   * @type {string}
   * @requires
   */
  export let target = undefined;

  /**
   * The size of the link.
   * @type {string}
   * @defaultValue 'medium'
   */
  export let size = VTMN_LINK_SIZE.MEDIUM;

  /**
   * Whether link is standalone or not.
   * @type {boolean}
   * @defaultValue false
   */
  export let standalone = false;

  /**
   * Whether link is reversed or not.
   * @type {boolean}
   * @defaultValue false
   */
  export let reversed = false;

  /**
   * Whether link has an icon or not.
   * @type {boolean}
   * @defaultValue false
   */
  export let iconAlong = false;

  /**
   * The relationship of the linked URL as space-separated link types.
   * @type {string}
   */
  export let rel = '';

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-link',
    size && `vtmn-link_size--${size}`,
    standalone && 'vtmn-link--standalone',
    reversed && 'vtmn-link--reversed',
    standalone && iconAlong && 'vtmn-link--icon-along',
    className,
  );

  let computedRel =
    target === '_blank'
      ? Array.from(new Set(rel.split(' ')).add('noopener').add('noreferrer'))
          .join(' ')
          .trim()
      : rel;
</script>

<a
  {href}
  {target}
  class={componentClass}
  rel={computedRel}
  on:click
  {...$$restProps}><slot /></a
>

<style lang="css">
  @import '@vtmn/css-link';
</style>
