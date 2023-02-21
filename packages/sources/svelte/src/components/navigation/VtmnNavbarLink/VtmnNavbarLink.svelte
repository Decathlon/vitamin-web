<script>
  import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.svelte';
  import { cn } from '../../../utils/classnames';

  /** @restProps { a } */

  /**
   * Icon of the navbar link.
   * @type {string}
   * @defaultValue undefined
   */
  export let icon;

  /**
   * Label of the navbar link. Mandatory even if label is not shown for screen readers.
   *
   * @type {string}
   */
  export let label;

  /**
   * @type {boolean} Displays the label of the navbar link.
   * @defaultValue true
   */
  export let showLabel = true;

  let className = undefined;
  /**
   * Custom classes to apply to the component.
   *
   * @type {string}
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-navbar_link',
    !showLabel && 'vtmn-navbar_link--icon-alone',
    className,
  );
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- because href comes through $$restProps -->
{#if showLabel}
  <a class={componentClass} {...$$restProps}>
    <VtmnIcon value={icon} aria-hidden="true" />
    {label}
  </a>
{:else}
  <a class={componentClass} {...$$restProps}>
    <VtmnIcon value={icon} aria-hidden="true" />
    <span class="vtmn-sr-only">{label}</span>
  </a>
{/if}

<style>
  .vtmn-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
