<script>
  import { cn } from '../../../utils/classnames';
  import { VtmnButton } from '../../..';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';

  /**
   * @type {string} text write into the snackbar
   */
  export let content;

  /**
   * @type {boolean} display close button
   * @defaultValue 'false'
   */
  export let withCloseButton = false;

  /**
   * @type {string} label of the action. If defined, it display an action button.
   */
  export let actionLabel = '';

  /**
   * @type {number} timeout before the component execute the close action.
   */
  export let timeout;

  let className = '';
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  let timeoutId;

  const dispatch = createEventDispatcher();
  const closeHandler = () => dispatch('close');
  const actionHandler = () => dispatch('action');
  const _clearTimeout = () => timeoutId && clearTimeout(timeoutId);
  const _setTimeout = () => (timeoutId = setTimeout(closeHandler, timeout));

  onDestroy(_clearTimeout);
  onMount(_setTimeout);

  $: componentClass = cn('vtmn-snackbar', 'show', className);
</script>

<div class={componentClass} role="status">
  <div class="vtmn-snackbar_content">
    {content}
  </div>
  {#if actionLabel}
    <VtmnButton on:click={actionHandler} variant="ghost-reversed" size="small">
      {actionLabel}
    </VtmnButton>
  {/if}
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
  @import '@vtmn/css-snackbar';
</style>
