<script>
  /**
   * @component Link View
   * @wrapper
   */
  import VtmnLink from '@vtmn/svelte/src/components/VtmnLink.svelte';

  export let children = 'Link';
</script>

<VtmnLink {...$$props}>{children}</VtmnLink>
