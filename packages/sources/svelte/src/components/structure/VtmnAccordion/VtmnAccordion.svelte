<script>
  import { cn } from '../../../utils/classnames';

  /**
   * @type {boolen} Display left icon on summary.
   */
  export let withIconLeft = false;

  /**
   * @type {string} Summary of the accordion.
   */
  export let summary;

  /**
   * @type {boolen} Disable the accordion.
   */
  export let disabled = false;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-accordion',
    withIconLeft ? 'vtmn-accordion--with-icon-left' : '',
    className,
  );
</script>

<details class={componentClass} aria-disabled={disabled}>
  <summary>{summary}</summary>
  <div class="vtmn-accordion_content">
    <slot />
  </div>
</details>

<style lang="css">
  @import '@vtmn/css-accordion';
</style>
