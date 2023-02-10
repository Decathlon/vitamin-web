<script>
  import { cn } from '../../../utils/classnames';

  /**
   * @type {boolean} disable the select
   * @default false
   */
  export let disabled = false;

  /**
   * @type {string} error message displayed under the select
   */
  export let error = undefined;

  /**
   * @type {boolean} the select has a border
   * @default true
   */
  export let border = true;

  /**
   * @type {string} id of the select
   * @requires
   */
  export let id;

  /**
   * @type {string} name of the select
   * @requires
   */
  export let name;

  /**
   * @type {string} label display above the select
   * @requires
   */
  export let label;

  /**
   * @type {object} selected value under the select
   * @requires
   */
  export let value;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-select_container',
    !border && `vtmn-select--no-border`,
    className,
  );
</script>

<div class={componentClass}>
  <label for={id}>{label}</label>
  <select
    {name}
    {id}
    {disabled}
    bind:value
    on:change
    class:vtmn-select--error={error}
    aria-invalid={error ? true : undefined}
    aria-describedby={error ? `error-text-${id}` : undefined}
    {...$$restProps}
  >
    <slot />
  </select>

  {#if error}
    <p id={`error-text-${id}`} class="vtmn-select_error-text">
      {error}
    </p>
  {/if}
</div>

<style>
  @import '@vtmn/css-select';
</style>
