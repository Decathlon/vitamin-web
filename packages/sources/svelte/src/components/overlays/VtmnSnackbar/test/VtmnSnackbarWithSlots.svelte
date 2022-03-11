<script>
  import { VtmnButton } from '../../../';
  import VtmnSnackbar from '../VtmnSnackbar.svelte';
</script>

<VtmnSnackbar {...$$restProps}>
  <VtmnButton variant="ghost-reversed" size="small">Action</VtmnButton>
</VtmnSnackbar>
