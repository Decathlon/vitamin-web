<script>
  import { cn } from '../../../utils/classnames';
  import { isFloat } from '../../../utils/math';
  import { SIZE } from './enum';

  /**
   * @type {string} name used on interactive mode to name the inputs
   */
  export let name;

  /**
   * @type {boolean} use the emphasis mode
   */
  export let emphasis = false;

  /**
   * @type {boolean} size of the component
   */
  export let size = SIZE.MEDIUM;

  /**
   * @type {boolean} disable the component
   */
  export let disabled = false;

  /**
   * @type {boolean} is readOnly component
   */
  export let readOnly = false;

  /**
   * @type {boolean} enable the compact mode
   */
  export let compact = false;

  /**
   * @type {number} rating to display on the component
   */
  export let rating = 0;

  let className;
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
  $: starsCnt = compact ? 1 : 5;

  // Need to be computed because on radio button mode, rating must be an integer
  $: computedRating = readOnly ? rating : Math.floor(rating);

  const computeRatingFill = (currentRatingStar) => {
    if (currentRatingStar <= computedRating) {
      return 'fill';
    }
    if (
      computedRating < currentRatingStar &&
      isFloat(computedRating) &&
      Math.ceil(computedRating) === currentRatingStar
    ) {
      return 'half-fill';
    }
    return 'line';
  };
</script>

<div
  class={componentClass}
  aria-disabled={disabled}
  aria-label={$$restProps['aria-label']}
>
  {#if !readOnly}
    <div
      class="vtmn-rating--interactive"
      aria-label="Rate the article"
      role="radiogroup"
    >
      {#each Array(starsCnt) as _, i}
        <input
          type="radio"
          bind:group={computedRating}
          {name}
          value={i + 1}
          id={`${name}-${i + 1}`}
          aria-label={`${i + 1} star out of 5`}
          {disabled}
        />
        <label for={`${name}-${i + 1}`} />
      {/each}
    </div>
  {/if}
  {#if readOnly}
    {#each Array(starsCnt) as _, i}
      <span
        class={`vtmx-star-${computeRatingFill(i + 1)}`}
        role="presentation"
      />
    {/each}
    <span class="vtmn-rating_comment--primary" aria-label="article rating">
      <slot name="primary" />
    </span>
    <span class="vtmn-rating_comment--secondary" aria-label="number of ratings">
      <slot name="secondary" />
    </span>
  {/if}
</div>

<style>
  @import '@vtmn/css-rating';
</style>
