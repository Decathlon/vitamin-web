<script>
  import { cn } from '../../../utils/classnames';

  /**
   * @type {string} Summary of the accordion.
   * @requires
   */
  export let summary;

  /**
   * @type {boolean} Display left icon on summary.
   * @default false
   */
  export let withIconLeft = false;

  /**
   * @type {boolean} Disable the accordion.
   * @default false
   */
  export let disabled = false;

  /**
   * @type {boolean} Open the accordion.
   * @default false
   */
  export let open = false;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };
  $: componentClass = cn(
    'vtmn-accordion',
    withIconLeft && 'vtmn-accordion--with-icon-left',
    className,
  );
</script>

<details
  class={componentClass}
  aria-disabled={disabled}
  {open}
  {...$$restProps}
>
  <summary>{summary}</summary>
  <div class="vtmn-accordion_content">
    <slot />
  </div>
</details>

<style lang="css">
  @import '@vtmn/css-accordion';
</style>
