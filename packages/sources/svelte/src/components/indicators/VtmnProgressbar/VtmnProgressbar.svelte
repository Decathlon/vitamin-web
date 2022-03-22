<script>
  import { VTMN_LOADER_VARIANT, VTMN_LOADER_SIZE } from './enums';
  import VtmnProgressbarCircular from './VtmnProgressbarCircular.svelte';
  import VtmnProgressbarLinear from './VtmnProgressbarLinear.svelte';

  export let variant = VTMN_LOADER_VARIANT.LINEAR;
  export let size = VTMN_LOADER_SIZE.MEDIUM;
  export let label = '';
  export let progress = 0;
  export let indeterminate = false;
  export let displayIndicator = false;
  export let withTrack = false;
  export let img = '';
  export let imgAlt;
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
    {displayIndicator}
    {withTrack}
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
