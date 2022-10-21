<script>
  import { VTMN_TOOLTIP_POSITION } from './enums';

  /**
   * @type {'bottom-left' | 'bottom' | 'bottom-right' | 'left' | 'right' | 'top-left' | 'top'| 'top-right' }  The tooltip position
   * @defaultValue top
   */
  export let position = VTMN_TOOLTIP_POSITION.TOP;

  /**
   * @type {string} The printed tooltip.
   */
  export let tooltip;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- This will be refactored in next major release -->
<span
  tabindex="0"
  class="vtmn-tooltip"
  data-tooltip={tooltip}
  data-position={position}
  role="tooltip"
>
  <slot />
</span>

<style lang="css">
  @import '@vtmn/css-tooltip';
</style>
