<script>
  import '@vtmn/css-text-input/dist/index.css';

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
   * Whether input is successful or not
   * @type {boolean}
   */
  export let valid = false;

  /**
   * Whether input is in error or not
   * @type {boolean}
   */
  export let error = false;
</script>

{#if labelText}
  <label class="vtmn-text-input_label" for="{id}">{labelText}</label>
{/if}
<input
  class="vtmn-text-input"
  class:vtmn-text-input--valid={valid}
  class:vtmn-text-input--error={error}
  type="text"
  {id}
  {disabled}
  {placeholder}
  {...$$restProps}
/>
{#if helperText}
  <p class="vtmn-text-input_helper-text">{helperText}</p>
{/if}
