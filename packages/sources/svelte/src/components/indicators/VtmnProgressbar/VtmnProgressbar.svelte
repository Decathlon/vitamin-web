<script>
  import { VTMN_LOADER_VARIANT, VTMN_LOADER_SIZE } from './enums';
  import VtmnProgressbarCircular from './VtmnProgressbarCircular.svelte';
  import VtmnProgressbarLinear from './VtmnProgressbarLinear.svelte';

  /**
   * @type {'linear'|'circular'} variant of the progressbar
   * @default linear
   * @requires
   */
  export let variant = VTMN_LOADER_VARIANT.LINEAR;

  /**
   * @type {'small'|'medium'|'large'} size of the progressbar
   * 'small' | 'medium' | 'large' for variant linear
   * 'small' | 'medium' for variant circular
   * @default medium
   * @requires
   */
  export let size = VTMN_LOADER_SIZE.MEDIUM;

  /**
   * @type {string|boolean} label of the progressbar
   * For variant linear must be a string. Displayed above the progressbar
   * For variant circular must be a boolean. Display progress on the progressbar
   */
  export let label = undefined;

  /**
   * @type {number} progress value
   * @requires
   */
  export let progress = 0;

  /**
   * @type {boolean} set the progress bar to indeterminate value
   * @default false
   */
  export let indeterminate = false;

  /**
   * @type {boolean} display track circle on progressbar cicular
   * @default false
   */
  export let track = false;

  /**
   * @type {string} image src in order to display it on the progress circular
   */
  export let img = undefined;

  /**
   * @type {string} alt text displayed for the image
   */
  export let imgAlt = undefined;
</script>

{#if variant === VTMN_LOADER_VARIANT.LINEAR}
  <VtmnProgressbarLinear
    {label}
    {size}
    {progress}
    {indeterminate}
    {...$$restProps}
  />
{:else if variant === VTMN_LOADER_VARIANT.CIRCULAR}
  <VtmnProgressbarCircular
    {progress}
    {label}
    {track}
    {indeterminate}
    {size}
    {img}
    {imgAlt}
    {...$$restProps}
  />
{/if}

<style>
  @import '@vtmn/css-progressbar';
</style>
