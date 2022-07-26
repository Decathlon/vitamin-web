<script>
  import { onMount } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import { uuid } from '../../../utils/math';

  import {
    VTMN_DIVIDER_ORIENTATION,
    VTMN_DIVIDER_TEXT_POSITION,
  } from './enums';

  /**
   * @type {string} Orientation of the divider
   */
  export let orientation = VTMN_DIVIDER_ORIENTATION.HORIZONTAL;

  /**
   * @type {string} Position of the text
   */
  export let textPosition = VTMN_DIVIDER_TEXT_POSITION.START;

  /**
   * @type {string} Id of the label
   */
  export let labelId = undefined;

  let className = undefined;

  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  onMount(async () => {
    if (labelId === undefined) {
      labelId = uuid();
    }
  });

  $: componentClass = cn(
    'vtmn-divider',
    `vtmn-divider_orientation--${orientation}`,
    `vtmn-divider_text-position--${textPosition}`,
    className,
  );
</script>

<div
  class={componentClass}
  role="separator"
  aria-orientation={orientation}
  aria-labelledby={labelId}
  {...$$restProps}
>
  {#if $$restProps['slot'] !== undefined && $$restProps['slot'] !== ''}
    <span id={labelId}>
      <slot />
    </span>
  {/if}
</div>

<style>
  @import '@vtmn/css-divider';
</style>
