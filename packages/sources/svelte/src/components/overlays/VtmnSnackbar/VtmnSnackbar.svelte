<script>
  import { VTMN_SNACKBAR_TIMEOUT } from './enum';
  import VtmnSnackbarItem from './VtmnSnackbarItem.svelte';
  import { vtmnSnackbarStore } from './vtmnSnackbarStore';
  const closeHandler = () => vtmnSnackbarStore.close();
</script>

{#each $vtmnSnackbarStore as snackbar (snackbar.id)}
  <VtmnSnackbarItem
    timeout={VTMN_SNACKBAR_TIMEOUT}
    content={snackbar.content}
    withCloseButton={snackbar.withCloseButton}
    actionLabel={snackbar.action.label}
    on:action={snackbar.action.execute}
    on:close={closeHandler}
  />
{/each}
