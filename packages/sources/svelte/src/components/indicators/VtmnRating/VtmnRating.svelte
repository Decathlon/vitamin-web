<script>
  import { cn } from '../../../utils/classnames';
  import { isFloat } from '../../../utils/math';
  import { VTMN_RATING_SIZE } from './enum';

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
  export let size = VTMN_RATING_SIZE.MEDIUM;

  /**
   * @type {boolean} disable the component
   */
  export let disabled = false;

  /**
   * @type {boolean} is readonly component
   */
  export let readonly = false;

  /**
   * @type {boolean} enable the compact mode
   */
  export let compact = false;

  /**
   * @type {number} rating to display on the component
   */
  export let rating = 0;

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
    if (currentRatingStar <= rating) {
      return 'fill';
    }
    if (
      rating < currentRatingStar &&
      isFloat(rating) &&
      Math.ceil(rating) === currentRatingStar
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
  {#if !readonly}
    <div
      class="vtmn-rating--interactive"
      aria-label="Rate the article"
      role="radiogroup"
      data-rating={rating}
    >
      {#each Array(starsCnt) as _, i}
        <input
          type="radio"
          bind:group={rating}
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
  {#if readonly}
    {#each Array(starsCnt) as _, i}
      <span
        class={`vtmx-star-${computeRatingFill(i + 1)}`}
        role="presentation"
      />
    {/each}
    {#if $$slots.primary}
      <span class="vtmn-rating_comment--primary" aria-label="article rating">
        <slot name="primary" />
      </span>
    {/if}
    {#if $$slots.secondary}
      <span
        class="vtmn-rating_comment--secondary"
        aria-label="number of ratings"
      >
        <slot name="secondary" />
      </span>
    {/if}
  {/if}
</div>

<style>
  @import '@vtmn/css-rating';
</style>
