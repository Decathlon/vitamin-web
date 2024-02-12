<script>
  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import { INFINITE_TIMEOUT_MS, CSS_ANIMATION_TIME_MS } from './enums';

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
   * Set to Infinity to keep the toast visible
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
  const _setTimeout = () =>
    (timeoutId =
      typeof timeout === 'number' &&
      setTimeout(
        closeHandler,
        (timeout < Infinity ? timeout : INFINITE_TIMEOUT_MS) +
          CSS_ANIMATION_TIME_MS,
      ));
  onDestroy(_clearTimeout);
  onMount(_setTimeout);

  $: componentClass = cn(
    'vtmn-toast',
    timeout > 0 && 'show animate-delay',
    withIcon && 'vtmn-toast--with-icon-info',
    className,
  );
</script>

<div
  class={componentClass}
  style:--vtmn-animation_overlay-duration={typeof timeout === 'number' &&
  timeout < Infinity
    ? `${timeout}ms`
    : `${INFINITE_TIMEOUT_MS}ms`}
  role="status"
  {...$$restProps}
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
