<script>
  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';
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
   * Can also be set with a slot="title"
   */
  export let title = undefined;

  /**
   * @type {string} description of the alert
   * Can also be set with a slot="description"
   */
  export let description = undefined;

  /**
   * @type {boolean} display with a close button
   */
  export let withCloseButton = false;

  /**
   * @type {number} time (ms) before the alert disappears
   */
  export let timeout = undefined;

  /**
   * @type {string} aria label on the button
   */
  export let ariaLabelButton;

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
    (timeoutId = timeout && setTimeout(closeHandler, timeout));
  onDestroy(_clearTimeout);
  onMount(_setTimeout);
  $: componentClass = cn(
    'vtmn-alert',
    timeout && 'show',
    variant && `vtmn-alert_variant--${variant}`,
    className,
  );
</script>

<div class={componentClass} role="alert" tabindex="-1" {...$$restProps}>
  <div class="vtmn-alert_content" role="document">
    <div id="alert-title" class="vtmn-alert_content-title">
      {#if $$slots.title}
        <slot name="title" />
      {:else}
        {title}
      {/if}
      {#if withCloseButton}
        <VtmnButton
          aria-label={ariaLabelButton}
          variant="ghost-reversed"
          size="small"
          iconAlone="close-line"
          on:click={closeHandler}
        />
      {/if}
    </div>
    {#if description || $$slots.description}
      <p id="alert-text" class="vtmn-alert_content-description">
        {#if $$slots.description}
          <slot name="description" />
        {:else}
          {description}
        {/if}
      </p>
    {/if}
  </div>
</div>

<style>
  @import '@vtmn/css-alert';
</style>
