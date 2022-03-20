<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_LOADER_SIZE } from './enums';

  export let progressIndicator = false;
  export let progress;
  export let withTrack = false;
  export let indeterminate = false;
  export let size; // small | medium
  export let img;

  const DEFAULT_RADIUS = 32;
  const DEFAULT_DASHOFFSET = 200;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-progressbar_container',
    'vtmn-progressbar_variant--circular',
    indeterminate && 'vtmn-progressbar--indeterminate',
    size === VTMN_LOADER_SIZE.SMALL && `vtmn-progressbar_size--small`,
    className,
  );

  let sizeMultiplier = 1;
  $: {
    sizeMultiplier = VTMN_LOADER_SIZE.SMALL === size ? 1 : 2;
  }
  const computeDashoffset = () =>
    DEFAULT_DASHOFFSET * sizeMultiplier -
    (DEFAULT_DASHOFFSET * sizeMultiplier * progress) / 100;
</script>

<div
  class={componentClass}
  role="progressbar"
  aria-label="progress bar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={progress}
>
  {#if img}
    <img class="vtmn-progressbar_image" src={img} alt="Black and white grid" />
  {/if}
  {#if progressIndicator && !indeterminate}
    <span class="vtmn-progressbar_label" data-value={progress} />
  {/if}
  <svg>
    {#if withTrack}
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
