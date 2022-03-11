<script>
  import { cn } from '../../../utils/classnames';
  import { VtmnButton } from '../../..';

  /**
   * @type {string} text write into the snackbar
   */
  export let content;

  /**
   * @type {boolean} display the snackbar
   * Default false
   */
  export let show = false;

  /**
   * @type {number} timeout before the snackbar disappear
   * Default 5000
   */
  export let timeout = 5000;

  /**
   * @type {boolean} display close button
   * Default false
   */
  export let displayCloseButton = false;

  let className = '';
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  let timeoutId;
  const closeHandler = () => {
    timeoutId && clearTimeout(timeoutId);
    show = false;
  };

  $: componentClass = cn('vtmn-snackbar', 'show', className);
  $: {
    if (show && timeout) {
      timeoutId = setTimeout(() => {
        show = false;
      }, timeout);
    }
  }
</script>

{#if show}
  <div class={componentClass} role="status">
    <div class="vtmn-snackbar_content">
      {content}
    </div>
    <slot />
    {#if displayCloseButton}
      <VtmnButton
        on:click={closeHandler}
        aria-label="Close alert"
        variant="ghost-reversed"
        size="small"
        iconAlone="close-line"
      />
    {/if}
  </div>
{/if}

<style>
  @import '@vtmn/css-snackbar';
</style>
