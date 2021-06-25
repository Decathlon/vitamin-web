<script>
  /**
   * @component Button View
   * @wrapper
   */
  import VtmnButton from '@vtmn/svelte/src/components/VtmnButton.svelte';

  export let children = 'Button';
</script>

<VtmnButton {...$$restProps}>{children}</VtmnButton>
