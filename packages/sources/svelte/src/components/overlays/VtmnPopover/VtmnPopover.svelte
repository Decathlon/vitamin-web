<script>
  import { cn } from '../../../utils/classnames';
  import { VTMN_POPOVER_POSITION } from './enums';

  /**
   * ID of the popover
   * @type {string}
   */
  export let id;

  /** @type {'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'} */
  export let position = VTMN_POPOVER_POSITION.TOP;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  /**
   * Reference of the popover
   */
  export let ref = undefined;

  /**
   * Reference of the body of the popover
   */
  export let bodyRef = undefined;

  /**
   * Reference of the title of the popover
   */
  export let titleRef = undefined;

  $: componentClass = cn('vtmn-popover', className);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- This will be refactored in next major release -->
<div
  class={componentClass}
  data-position={position}
  aria-describedby={id}
  aria-labelledby={`${id}-title`}
  tabindex="0"
  {id}
  bind:this={ref}
  {...$$restProps}
>
  <slot />

  <div {id} role="dialog">
    <p
      bind:this={titleRef}
      class="vtmn-popover_title"
      id={`${id}-title`}
      role="heading"
      aria-level="2"
    >
      <slot name="title" />
    </p>
    <p class="vtmn-popover_text" bind:this={bodyRef}><slot name="body" /></p>
  </div>
</div>

<style lang="css">
  @import '@vtmn/css-popover';
</style>
