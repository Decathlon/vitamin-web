<script>
  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { cn } from '../../../utils/classnames';

  /**
   * @type {boolean} display the toast with an icon
   * @defaultValue 'false'
   */
  export let withIcon = false;

  /**
   * @type {string} content text of the toast
   */
  export let content;

  /**
   * @type {string} display a close button
   * @defaultValue 'false'
   */
  export let withCloseButton = false;

  /**
   * @type {number} Time (ms) before the component dispatch automatically 'close'
   */
  export let timeout;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  let timeoutId;

  const dispatch = createEventDispatcher();
  const closeHandler = () => dispatch('close');
  const _clearTimeout = () => timeoutId && clearTimeout(timeoutId);
  const _setTimeout = () => (timeoutId = setTimeout(closeHandler, timeout));
  onDestroy(_clearTimeout);
  onMount(_setTimeout);

  $: componentClass = cn(
    'vtmn-toast',
    'show',
    withIcon && 'vtmn-toast--with-icon-info',
    className,
  );
</script>

<div class={componentClass} role="status" {...$$restProps}>
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
