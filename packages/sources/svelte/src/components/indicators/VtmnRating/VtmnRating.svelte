<script>
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';
  import { cn } from '../../../utils/classnames';
  import { isFloat } from '../../../utils/math';
  import { VTMN_RATING_SIZE } from './enum';

  /**
   * @type {string} name used on interactive mode to name the inputs
   * @required
   */
  export let name;

  /**
   * @type {boolean} use the emphasis mode. Only if readonly is true.
   * @default false
   */
  export let emphasis = false;

  /**
   * @type {string} size of the component
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
   * @type {boolean} enable the compact mode. Only if readonly is true.
   * @default false
   */
  export let compact = false;

  /**
   * @type {number} rating to display on the component
   * @requires
   */
  export let value;

  /**
   * @type {boolean} display the rating value. Only if readonly is true.
   * default false
   */
  export let showValue = false;

  /**
   * @type {number} Comments displayed after the rating. Only if readonly is true.
   */
  export let comments = undefined;

  /**
   * @typedef AriaLabels
   * @type {object}
   * @property {string} rateArticle - Aria label of the radio group (readOnly to false).
   * @property {string} ratingStarNote - Aria label of the note of the component.
   * @property {string} ratingStarPosition - Aria label of the each star.
   * @property {string} ratingNumber - Aria label of comment element.
   * @property {string} ratingArticle - Aria label of value note element.
   */

  /**
   * @type {AriaLabels} Aria labels of the component.
   */
  export let ariaLabel = {};

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  const {
    rateArticle,
    ratingStarNote,
    ratingStarPosition,
    ratingNumber,
    ratingArticle,
  } = ariaLabel || {};

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

<div
  class={componentClass}
  aria-disabled={disabled}
  {...$$restProps}
  aria-label={ratingStarNote}
>
  {#if readonly}
    {#each Array(starsCnt) as _, index}
      {@const position = index + 1}
      <VtmnIcon
        value={`star-${computeRatingFill(position)}`}
        role="presentation"
      />
    {/each}
    {#if showValue}
      <span class="vtmn-rating_comment--primary" aria-label={ratingArticle}>
        {value}/5
      </span>
    {/if}
    {#if comments}
      <span class="vtmn-rating_comment--secondary" aria-label={ratingNumber}>
        {comments}
      </span>
    {/if}
  {:else}
    <div
      class="vtmn-rating--interactive"
      aria-label={rateArticle}
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
          aria-label={ratingStarPosition &&
            ratingStarPosition.replace('{0}', position)}
          {disabled}
        />
        <label for={`${name}-${position}`} />
      {/each}
    </div>
  {/if}
</div>

<style>
  @import '@vtmn/css-rating';
</style>
