<script>
  /**
   * ID of input
   * @type {string}
   * @requires
   */
  export let id;

  /**
   * Name of input
   * @type {string} input name
   * @requires
   */
  export let name;

  /**
   * Label of input
   * @type {string}
   * @requires
   */
  export let label;

  /**
   * Whether the input is checked
   * @type {boolean}
   * @default false
   */
  export let checked = false;

  /**
   * Whether the input is disabled
   * @type {boolean}
   * @default false
   */
  export let disabled = false;
</script>

<div>
  <input
    class="vtmn-radio-button"
    type="radio"
    {id}
    {name}
    {checked}
    {disabled}
  />
  <label for={id}>{label}</label>
</div>

<style lang="css">
  @import '@vtmn/css-radio-button';
</style>
