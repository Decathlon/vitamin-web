<script>
  /**
   * @component Button View
   * @wrapper
   */
  import { VtmnButton } from '@vtmn/svelte';

  export let children = 'Button';
</script>

<VtmnButton {...$$props}>{children}</VtmnButton>
