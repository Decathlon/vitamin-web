<script>
  import { VtmnButton } from '../../..';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';

  /**
   * @type {boolean} display the toast with a left icon
   */
  export let withIcon = false;

  /**
   * @type {string} content text of the toast
   */
  export let content;

  /**
   * @type {string} display a close button on right
   */
  export let withCloseButton = false;

  /**
   * @type {number} timeout before the component execute the close action
   */
  export let timeout;
  let timeoutId;

  const dispatch = createEventDispatcher();
  const closeHandler = () => {
    dispatch('close');
  };

  const _clearTimeout = () => timeoutId && clearTimeout(timeoutId);
  const _setTimeout = () => (timeoutId = setTimeout(closeHandler, timeout));
  onDestroy(_clearTimeout);
  onMount(_setTimeout);
</script>

<div
  class="vtmn-toast show"
  class:vtmn-toast--with-icon-info={withIcon}
  role="status"
  {...$$props}
>
  <div class="vtmn-toast_content">{content}</div>
  {#if withCloseButton}
    <VtmnButton
      on:click={closeHandler}
      aria-label="Close alert"
      variant="ghost-reversed"
      size="small"
      iconAlone="close-line"
    />
  {/if}
</div>

<style>
  @import '@vtmn/css-toast';
</style>
