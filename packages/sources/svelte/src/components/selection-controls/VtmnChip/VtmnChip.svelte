<script>
  import { VtmnBadge, VtmnButton } from '../../index';
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
  export let disabled = false;

  /**
   * The selected state of the chip
   */
  export let selected = false;

  /**
   * The icon to display on the left side of the chip.
   * Only for 'input' variant
   */
  export let icon = undefined;

  /**
   * The value in the badge.
   * Only for `filter` variant
   */
  export let badgeValue = 0;

  let className = '';
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-chip',
    `vtmn-chip_variant--${variant}`,
    `vtmn-chip_size--${size}`,
    selected && variant !== VARIANTS.ACTION ? 'vtmn-chip--selected' : '',
    disabled ? 'vtmn-chip--disabled' : '',
    className,
  );

  $: displayInputButton = variant === VARIANTS.INPUT && selected;
  $: displayFilterBadge = variant === VARIANTS.FILTER && badgeValue > 0;
  $: displayLeftIcon =
    [VARIANTS.INPUT, VARIANTS.ACTION].includes(variant) && icon;
  $: disableTableIndex = (variant === VARIANTS.INPUT && selected) || disabled;

  const cancelClickHandler = () => {
    dispatch('cancel');
  };
  const selectClickHandler = () => {
    if (disabled || (variant === VARIANTS.INPUT && selected)) {
      return;
    }
    dispatch('click');
  };
</script>

<div
  class={componentClass}
  on:click={selectClickHandler}
  tabindex={disableTableIndex ? undefined : 0}
>
  {#if displayLeftIcon}
    <span class={`vtmx-${icon}`} aria-hidden="true" />
  {/if}
  <slot />
  {#if displayInputButton}
    <VtmnButton
      variant="ghost-reversed"
      iconAlone="close-line"
      aria-label={$$restProps['aria-label']}
      {size}
      on:click={cancelClickHandler}
      {disabled}
    />
  {/if}
  {#if displayFilterBadge}
    <VtmnBadge value={badgeValue} />
  {/if}
</div>

<style lang="css">
  @import '@vtmn/css-chip';
</style>
