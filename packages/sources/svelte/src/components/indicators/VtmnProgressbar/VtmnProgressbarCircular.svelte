<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_PROGRESSBAR_SIZE } from './enums';

  /**
   * @type {number} progress value
   * @default 0
   */
  export let progress = 0;

  /**
   * @type {boolean} display progress value under the circle
   * @default false
   */
  export let label = false;

  /**
   * @type {boolean} enable track circle around the circle
   * @default false
   */
  export let track = false;

  /**
   * @type {boolean} set the progressbar to intermediate
   * @default false
   */
  export let indeterminate = false;

  /**
   * @type {'small'|'medium'} size of the progressbar
   * @default medium
   */
  export let size = VTMN_PROGRESSBAR_SIZE.MEDIUM;

  /**
   * @type {string} image src displayed on the progressbar
   */
  export let img = undefined;

  /**
   * @type {string} alt applied on the image
   */
  export let imgAlt = undefined;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  const DEFAULT_RADIUS = 32;
  const DEFAULT_DASHOFFSET = 200;

  $: componentClass = cn(
    'vtmn-progressbar_container',
    'vtmn-progressbar_variant--circular',
    indeterminate && 'vtmn-progressbar--indeterminate',
    size === VTMN_PROGRESSBAR_SIZE.SMALL && `vtmn-progressbar_size--small`,
    className,
  );

  let sizeMultiplier = 1;
  $: {
    sizeMultiplier = VTMN_PROGRESSBAR_SIZE.SMALL === size ? 1 : 2;
  }
  const computeDashoffset = () =>
    DEFAULT_DASHOFFSET * sizeMultiplier -
    (DEFAULT_DASHOFFSET * sizeMultiplier * (indeterminate ? 100 : progress)) /
      100;
</script>

<div
  class={componentClass}
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={indeterminate ? undefined : progress}
  {...$$restProps}
>
  {#if img}
    <img class="vtmn-progressbar_image" src={img} alt={imgAlt} />
  {/if}
  {#if label && !indeterminate}
    <span class="vtmn-progressbar_label" data-value={progress} />
  {/if}
  <svg>
    {#if track}
      <circle
        class="vtmn-progressbar_track"
        cx="50%"
        cy="50%"
        r={DEFAULT_RADIUS * sizeMultiplier}
      />
    {/if}
    <circle
      class="vtmn-progressbar_indicator"
      stroke-dashoffset={computeDashoffset(sizeMultiplier)}
      cx="50%"
      cy="50%"
      r={DEFAULT_RADIUS * sizeMultiplier}
    />
  </svg>
</div>
