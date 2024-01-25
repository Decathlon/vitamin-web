<script>
  import VtmnBadge from '../../indicators/VtmnBadge/VtmnBadge.svelte';
  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';
  import { createEventDispatcher } from 'svelte';
  import { VTMN_CHIP_VARIANT, VTMN_CHIP_SIZE } from './enums';
  import { cn } from '../../../utils/classnames';

  const dispatch = createEventDispatcher();

  /**
   * The variant of the chip.
   */
  export let variant = VTMN_CHIP_VARIANT.SINGLE_CHOICE;

  /**
   * The size of the chip.
   */
  export let size = VTMN_CHIP_SIZE.MEDIUM;

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

  /**
   * Root node type
   */
  export let element = 'div';

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: isSelected =
    selected &&
    [VTMN_CHIP_VARIANT.SINGLE_CHOICE, VTMN_CHIP_VARIANT.FILTER].includes(
      variant,
    );
  $: componentClass = cn(
    'vtmn-chip',
    `vtmn-chip_variant--${variant}`,
    `vtmn-chip_size--${size}`,
    isSelected && 'vtmn-chip--selected',
    disabled ? 'vtmn-chip--disabled' : '',
    className,
  );

  $: displayInputButton = variant === VTMN_CHIP_VARIANT.INPUT;
  $: displayFilterBadge =
    variant === VTMN_CHIP_VARIANT.FILTER && badgeValue > 0;
  $: displayLeftIcon =
    [VTMN_CHIP_VARIANT.INPUT, VTMN_CHIP_VARIANT.ACTION].includes(variant) &&
    icon;

  const cancelClickHandler = (e) => {
    e.stopPropagation();
    dispatch('cancel');
  };
  const selectClickHandler = () => {
    if (disabled) {
      return;
    }
    dispatch('click');
  };
</script>

<svelte:element
  this={element}
  class={componentClass}
  role="button"
  aria-disabled={disabled}
  aria-pressed={isSelected && variant !== 'action'}
  on:click={selectClickHandler}
  on:keydown
  on:keyup
  on:keypress
  tabindex={disabled ? undefined : 0}
  {...$$restProps}
>
  {#if displayLeftIcon}
    <VtmnIcon value={icon} aria-hidden="true" />
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
</svelte:element>

<style lang="css">
  @import '@vtmn/css-chip';
</style>
