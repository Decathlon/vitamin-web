<script>
  import { VTMN_LOADER_VARIANT, VTMN_LOADER_SIZE } from './enums';
  import VtmnLoaderCircular from './VtmnLoaderCircular.svelte';
  import VtmnLoaderLinear from './VtmnLoaderLinear.svelte';

  export let variant = VTMN_LOADER_VARIANT.LINEAR;
  export let label = '';
  export let progress = 0;
  export let indeterminate = false;
  export let size = VTMN_LOADER_SIZE.MEDIUM;
  export let progressIndicator = false;
  export let withTrack = false;
  export let img = '';
</script>

{#if variant === VTMN_LOADER_VARIANT.LINEAR}
  <VtmnLoaderLinear
    {label}
    {progress}
    {indeterminate}
    {size}
    {progressIndicator}
    {...$$restProps}
  />
{:else if variant === VTMN_LOADER_VARIANT.CIRCULAR}
  <VtmnLoaderCircular
    {progress}
    {indeterminate}
    {size}
    {progressIndicator}
    {withTrack}
    {img}
    {...$$restProps}
  />
{/if}

<style>
  @import '@vtmn/css-loader';
</style>
