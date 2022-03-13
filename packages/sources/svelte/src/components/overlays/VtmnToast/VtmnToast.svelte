<script>
  import { vtmnToastStore } from './vtmnToastStore';
  import VtmnToastItem from './VtmnToastItem.svelte';
  const closeHandler = (id) => {
    vtmnToastStore.close(id);
  };
</script>

<div id="vtmn-toast-container">
  {#each $vtmnToastStore as toast, index (toast.id)}
    <VtmnToastItem
      on:close={() => {
        closeHandler(toast.id);
      }}
      style={`--toast-position:${index}`}
      {...toast}
    />
  {/each}
</div>

<style>
  :global(#vtmn-toast-container .vtmn-toast) {
    transform: translate(50%, calc(-50% - (var(--toast-position) * 80px)));
  }
</style>
