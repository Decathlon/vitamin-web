<script>
  import { cn } from '../../../utils/classnames';

  /** @restProps { input | textarea } */

  /**
   * ID of the input
   * @type {string}
   */
  export let id;

  /**
   * Label text linked to the input
   * @type {string}
   */
  export let labelText;

  /**
   * Plaholder of the input
   * @type {string}
   */
  export let placeholder;

  /**
   * Whether input should be disabled or not
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Helper text to help the user
   * @type {string}
   */
  export let helperText;

  /**
   * Whether input is multiline or not
   * @type {boolean}
   */
  export let multiline = false;

  /**
   * Whether input is successful or not
   * @type {boolean}
   */
  export let valid = false;

  /**
   * Whether input is in error or not
   * @type {boolean}
   */
  export let error = false;

  /**
   * Icon to be displayed
   * @type {string}
   */
  export let icon;

  /**
   * The value of the input
   * @type {string}
   */
  export let value;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    'vtmn-text-input',
    valid && 'vtmn-text-input--valid',
    error && 'vtmn-text-input--error',
    className,
  );
</script>

{#if labelText}
  <label class="vtmn-text-input_label" for={id}>{labelText}</label>
{/if}
{#if multiline}
  <textarea
    bind:value
    class={componentClass}
    {id}
    {disabled}
    {placeholder}
    {...$$restProps}
  />
{:else}
  <div class="vtmn-text-input_container">
    <input
      bind:value
      class={componentClass}
      type="text"
      {id}
      {disabled}
      {placeholder}
      {...$$restProps}
    />
    <span class={icon && `vtmx-${icon}`} />
  </div>
{/if}
{#if helperText}
  <p
    class={cn(
      'vtmn-text-input_helper-text',
      error && 'vtmn-text-input_helper-text--error',
    )}
  >
    {helperText}
  </p>
{/if}

<style lang="css">
  @import '@vtmn/css-text-input';
</style>
