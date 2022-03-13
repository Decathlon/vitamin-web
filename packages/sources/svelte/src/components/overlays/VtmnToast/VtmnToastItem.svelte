<script>
  import { tweened } from 'svelte/motion';
  import { linear } from 'svelte/easing';
  import { VtmnButton } from '../../..';
  import { createEventDispatcher } from 'svelte';
  import { VTMN_TOAST_TIMEOUT } from './enums';

  /**
   * @type {boolean} display the toast with a left icon
   */
  export let withIcon = false;

  /**
   * @type {string} content text of the toast
   */
  export let content;

  /**
   * @type {string} diplay a close button on right
   */
  export let withCloseButton = false;

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch('close');
  };

  let timeout = VTMN_TOAST_TIMEOUT;
  let progress = tweened(0, { duration: timeout, easing: linear });
  progress.set(1).then(handleClose);
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
      on:click={handleClose}
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
