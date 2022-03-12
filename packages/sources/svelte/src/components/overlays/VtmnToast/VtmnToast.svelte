<script>
  import { vtmnToastStore } from './vtmnToast';
  import { VtmnButton } from '../../';
</script>

{#each $vtmnToastStore as toast, index}
  <div
    class="vtmn-toast "
    class:show={toast.show}
    class:vtmn-toast--with-icon-info={toast.withIcon}
    role="status"
    style={`--toast-position:${index * 80}px`}
  >
    <div class="vtmn-toast_content">{toast.content}</div>
    {#if toast.withCloseButton}
      <VtmnButton
        on:click={() => vtmnToastStore.close(toast)}
        aria-label="Close alert"
        variant="ghost-reversed"
        size="small"
        iconAlone="close-line"
      />
    {/if}
  </div>
{/each}

<style>
  @import '@vtmn/css-toast';
  .vtmn-toast {
    transform: translate(50%, calc(-50% - var(--toast-position)));
  }
</style>
