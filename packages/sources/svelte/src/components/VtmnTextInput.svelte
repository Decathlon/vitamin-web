<script>
  import '@vtmn/css-text-input/dist/index.css';

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
</script>

{#if labelText}
  <label class="vtmn-text-input_label" for={identifier}>{labelText}</label>
{/if}
{#if multiline}
  <textarea
    class="vtmn-text-input"
    class:vtmn-text-input--error={error}
    class:vtmn-text-input--valid={valid}
    id="my-text-input-multiline-1"
    {identifier}
    {disabled}
    {placeholder}
    {...$$props}
  />
  {#if helperText}
    <p
      class="vtmn-text-input_helper-text"
      class:vtmn-text-input_helper-text--error={error}
    >
      {helperText}
    </p>
  {/if}
{:else}
  <div class="vtmn-text-input_container">
    <input
      class="vtmn-text-input"
      class:vtmn-text-input--valid={valid}
      class:vtmn-text-input--error={error}
      type="text"
      {identifier}
      {disabled}
      {placeholder}
      {...$$props}
    />
    <span class={icon && `vtmx-${icon}`} />
  </div>
  {#if helperText}
    <p
      class="vtmn-text-input_helper-text"
      class:vtmn-text-input_helper-text--error={error}
    >
      {helperText}
    </p>
  {/if}
{/if}
