<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_LOADER_SIZE } from './enums';

  /**
   * The size of the loader.
   * @type {'small' | 'medium' | 'large'}
   */
  export let size = VTMN_LOADER_SIZE.MEDIUM;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-loader',
    size && `vtmn-loader_size--${size}`,
    className,
  );
</script>

<div class={componentClass} {...$$restProps} />

<style lang="css">
  @import '@vtmn/css-loader';
</style>
