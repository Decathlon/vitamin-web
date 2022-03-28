<script>
  import { VtmnButton } from '../../..';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import { VTMN_ALERT_VARIANT } from './enums';

  /**
   * @type {'info'|'success'|'danger'|'warning'} variant of the alert
   * @defaultValue info
   */
  export let variant = VTMN_ALERT_VARIANT.INFO;

  /**
   * @type {string} title of the alert
   */
  export let title;

  /**
   * @type {string} description of the alert
   */
  export let description = undefined;

  /**
   * @type {boolean} display with a close button
   */
  export let withCloseButton = false;

  /**
   * @type {number} time (ms) before the alert disappears
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
    'vtmn-alert',
    'show',
    variant && `vtmn-alert_variant--${variant}`,
    className,
  );
</script>

<div class={componentClass} role="alert" tabindex="-1" {...$$restProps}>
  <div class="vtmn-alert_content" role="document">
    <div id="alert-title" class="vtmn-alert_content-title">
      {title}
      {#if withCloseButton}
        <VtmnButton
          aria-label="Close alert"
          variant="ghost-reversed"
          size="small"
          iconAlone="close-line"
          on:click={closeHandler}
        />
      {/if}
    </div>
    {#if description}
      <p id="alert-text" class="vtmn-alert_content-description">
        {description}
      </p>
    {/if}
  </div>
</div>

<style>
  @import '@vtmn/css-alert';
</style>
