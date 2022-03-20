<script>
  import { cn } from '../../../utils/classnames';

  export let label;
  export let size;
  export let progress;
  export let indeterminate;

  let className;
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
  aria-label="progress bar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={progress}
>
  {#if label && !indeterminate}
    <span class="vtmn-progressbar_label" data-value={progress}>{label}</span>
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
