<script>
  import { VTMN_ALERT_TIMEOUT } from './enums';
  import { vtmnAlertStore } from './vtmnAlertStore';
  import VtmnAlertItem from './VtmnAlertItem.svelte';
  const closeHandler = (id) => {
    vtmnAlertStore.close(id);
  };
</script>

{#each $vtmnAlertStore.slice(0, 1) as alert (alert.id)}
  <VtmnAlertItem
    on:close={() => {
      closeHandler(alert.id);
    }}
    timeout={VTMN_ALERT_TIMEOUT}
    {...alert}
  />
{/each}
