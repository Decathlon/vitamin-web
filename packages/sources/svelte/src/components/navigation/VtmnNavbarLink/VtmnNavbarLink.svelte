<script>
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';
  import { cn } from '../../../utils/classnames';
  import { computeRel } from '../../../utils/link';

  /** @restProps { a } */

  /**
   * Icon of the navbar link.
   * @type {string}
   * @defaultValue undefined
   */
  export let icon;

  let className = undefined;
  /**
   * Custom classes to apply to the component.
   *
   * @type {string}
   */
  export { className as class };

  $: componentClass = cn('vtmn-navbar_link', className);
  let computedRel = computeRel($$restProps['target'], $$restProps['rel']);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- because href comes through $$restProps -->
<a
  class={componentClass}
  {...$$restProps}
  rel={computedRel}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseout
  on:focus
  on:blur
  on:keydown
>
  <slot name="badge" />
  <VtmnIcon value={icon} aria-hidden="true" />
  <slot />
</a>
