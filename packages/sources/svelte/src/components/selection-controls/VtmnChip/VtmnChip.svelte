<script>
  import { createEventDispatcher } from 'svelte';
  import { VARIANTS, SIZES } from './enums';
  import { cn } from '../../../utils/classnames';

  const dispatch = createEventDispatcher();

  /**
   * The variant of the chip.
   */
  export let variant = VARIANTS.SINGLE_CHOICE;

  /**
   * The size of the chip.
   */
  export let size = SIZES.MEDIUM;

  /**
   * The disabled state of the chip
   */
  export let disabled;

  /**
   * The selected state of the chip
   */
  export let selected;

  /**
   * The icon to display on the left side of the chip.
   * Only for 'input' variant
   */
  export let icon;

  /**
   * The value in the badge.
   * Only for 'filter' variant
   */
  export let badgeValue;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-chip',
    `vtmn-chip_variant--${variant}`,
    `vtmn-chip_size--${size}`,
    selected ? 'vtmn-chip--selected' : '',
    disabled ? 'vtmn-chip--disabled' : '',
    className,
  );

  $: buttonClass = cn(
    'vtmn-btn',
    'vtmn-btn--icon-alone',
    `vtmn-btn_size--${size}`,
    'vtmn-btn_variant--ghost-reversed',
  );

  $: displayInputButton = variant === VARIANTS.INPUT && selected;
  $: displayFilterBadge = variant === VARIANTS.FILTER && badgeValue;
  $: displayLeftIcon = variant === VARIANTS.INPUT && icon;
  $: disableTableIndex = VARIANTS.INPUT && selected;

  const buttonClickHandler = (event) => {
    dispatch('cancel');
  };
  const componentClickHandler = (event) => {
    if (variant === VARIANTS.INPUT && selected) {
      return;
    }
    dispatch('click');
  };
</script>

<div
  class={componentClass}
  on:click={componentClickHandler}
  tabindex={disableTableIndex ? '' : 0}
>
  {#if displayLeftIcon}
    <span class={`vtmx-${icon}`} aria-hidden="true" />
  {/if}
  <slot />
  {#if displayInputButton}
    <button
      {disabled}
      on:click={buttonClickHandler}
      class={buttonClass}
      aria-label={$$restProps['aria-label']}
    >
      <span class="vtmx-close-line" />
    </button>
  {/if}
  {#if displayFilterBadge}
    <span class="vtmn-badge">{badgeValue}</span>
  {/if}
</div>

<style lang="css">
  @import '@vtmn/css-chips';
</style>
