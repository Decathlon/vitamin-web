<script>
  import { cn } from '../../../utils/classnames';
  import { isFloat } from '../../../utils/math';
  import { VTMN_RATING_SIZE } from './enum';
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';

  /**
   * @type {string} name used on interactive mode to name the inputs
   * @required
   */
  export let name;

  /**
   * @type {boolean} use the emphasis mode
   * @default false
   */
  export let emphasis = false;

  /**
   * @type {boolean} size of the component
   * @default medium
   */
  export let size = VTMN_RATING_SIZE.MEDIUM;

  /**
   * @type {boolean} disable the component
   * @default false
   */
  export let disabled = false;

  /**
   * @type {boolean} is readonly component
   * @default false
   */
  export let readonly = false;

  /**
   * @type {boolean} enable the compact mode, only for readonly
   * @default false
   */
  export let compact = false;

  /**
   * @type {number} rating to display on the component
   * @requires
   */
  export let value;

  /**
   * @type {boolean} display the rating value
   * default false
   */
  export let showValue = false;

  /**
   * @type {number} Review number
   */
  export let comments = undefined;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-rating',
    size && `vtmn-rating_size--${size}`,
    emphasis && 'vtmn-rating_variant--brand',
    className,
  );
  $: starsCnt = compact && readonly ? 1 : 5;

  const computeRatingFill = (currentRatingStar) => {
    if (starsCnt === 1) {
      return value === 0 ? 'line' : 'fill';
    }
    if (currentRatingStar <= value) {
      return 'fill';
    }
    if (
      value < currentRatingStar &&
      isFloat(value) &&
      Math.ceil(value) === currentRatingStar
    ) {
      return 'half-fill';
    }
    return 'line';
  };
</script>

<div class={componentClass} aria-disabled={disabled} {...$$restProps}>
  {#if !readonly}
    <div
      class="vtmn-rating--interactive"
      aria-label="Rate the article"
      role="radiogroup"
      data-rating={value}
    >
      {#each Array(starsCnt) as _, index}
        {@const position = index + 1}
        <input
          type="radio"
          bind:group={value}
          {name}
          value={position}
          id={`${name}-${position}`}
          aria-label={`${position} star out of 5`}
          {disabled}
        />
        <label for={`${name}-${position}`} />
      {/each}
    </div>
  {/if}
  {#if readonly}
    {#each Array(starsCnt) as _, index}
      {@const position = index + 1}
      <VtmnIcon
        value={`star-${computeRatingFill(position)}`}
        role="presentation"
      />
    {/each}
    {#if showValue}
      <span class="vtmn-rating_comment--primary" aria-label="article rating">
        {value}/5
      </span>
    {/if}
    {#if typeof comments === 'number'}
      <span
        class="vtmn-rating_comment--secondary"
        aria-label="number of ratings"
      >
        ({comments})
      </span>
    {/if}
  {/if}
</div>

<style>
  @import '@vtmn/css-rating';
</style>
