<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_PROGRESSBAR_SIZE } from './enums';

  /**
   * @type {string} label display above the progress bar.
   * Hidden when indeterminate is true
   * @requires
   */
  export let label;

  /**
   * @type {'small'|'medium'|'large'} size of the progressbar
   * @default medium
   */
  export let size = VTMN_PROGRESSBAR_SIZE.MEDIUM;

  /**
   * @type {number} progress value
   * @default 0
   */
  export let progress;

  /**
   * @type {boolean} Set the progressbar to indeterminate
   * @default false
   */
  export let indeterminate = false;

  /**
   * @type {string} Id of the label
   * @default undefined
   */
  export let labelId;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-progressbar_container',
    size && `vtmn-progressbar_size--${size}`,
    indeterminate && `vtmn-progressbar--indeterminate`,
    className,
  );
</script>

<div
  class={componentClass}
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={indeterminate ? undefined : progress}
  aria-labelledby={labelId ? labelId : undefined}
  {...$$restProps}
>
  {#if label && !indeterminate}
    <div class="vtmn-progressbar_label">
      <span id={labelId ? labelId : undefined}>{label}</span>
      <span aria-live="assertive">{progress}%</span>
    </div>
  {/if}
  {#if indeterminate}
    <span id={labelId ? labelId : undefined} class="vtmn-sr-only">{label}</span>
  {/if}
  <svg>
    <line
      class="vtmn-progressbar_indicator"
      x1="0"
      x2={`${indeterminate ? 100 : progress}%`}
      y1="50%"
      y2="50%"
    />
  </svg>
</div>
