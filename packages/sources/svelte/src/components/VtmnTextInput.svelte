<script>
  import '@vtmn/css-text-input/dist/index.css';

  /** @restProps { input | textarea } */

  /**
   * ID of the input
   * @type {string}
   */
  export let identifier;

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
</script>

{#if labelText}
  <label class="vtmn-text-input_label" for={identifier}>{labelText}</label>
{/if}
{#if multiline}
  <textarea
    bind:value
    class="vtmn-text-input"
    class:vtmn-text-input--error={error}
    class:vtmn-text-input--valid={valid}
    id={identifier}
    {disabled}
    {placeholder}
    {...$$restProps}
  />
{:else}
  <div class="vtmn-text-input_container">
    <input
      bind:value
      class="vtmn-text-input"
      class:vtmn-text-input--valid={valid}
      class:vtmn-text-input--error={error}
      type="text"
      id={identifier}
      {disabled}
      {placeholder}
      {...$$restProps}
    />
    <span class={icon && `vtmx-${icon}`} />
  </div>
{/if}
{#if helperText}
  <p
    class="vtmn-text-input_helper-text"
    class:vtmn-text-input_helper-text--error={error}
  >
    {helperText}
  </p>
{/if}
