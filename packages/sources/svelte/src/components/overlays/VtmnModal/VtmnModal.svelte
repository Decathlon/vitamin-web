<script>
  import { cn } from '../../../utils/classnames';
  import { VtmnButton } from '../../../index';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /**
   * @type {string} Title of the modal
   */
  export let title;

  /**
   * @type {boolean} Display or hide the modal
   * Default false
   */
  export let show = false;

  /**
   * @type {boolean} Enable the show animation.
   * Default true
   */
  export let animationDisabled = false;

  let className = '';
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-modal', !animationDisabled && 'show', className);

  const handleCancel = () => {
    dispatch('cancel', { show });
  };
</script>

{#if show}
  <style>
    body {
      overflow: hidden;
    }
  </style>
  <div
    class={componentClass}
    role="dialog"
    aria-modal="true"
    aria-labelledby={$$restProps['aria-labelledby']}
    aria-describedby={$$restProps['aria-describedby']}
  >
    <div
      id="vtmn-modal-background"
      class="vtmn-modal_background-overlay"
      on:click={handleCancel}
    />
    <div class="vtmn-modal_content">
      <div class="vtmn-modal_content_title">
        <span id="vtmn-modal-title" class="vtmn-modal_content_title--text"
          >{title}</span
        >
        <VtmnButton
          aria-label="close"
          variant="ghost"
          iconAlone="close-line"
          on:click={handleCancel}
        />
      </div>
      <div class="vtmn-modal_content_body">
        <slot name="description" />
        {#if $$slots.actions}
          <div class="vtmn-modal_content_body--overflow-indicator" />
        {/if}
      </div>
      <slot name="actions" />
    </div>
  </div>
{/if}

<style>
  @import '@vtmn/modal';
</style>
