<script>
  /**
   * ID of input
   * @type {string}
   * @requires
   */
  export let id;

  /**
   * Name of input
   * @type {string}
   * @requires
   */
  export let name;

  /**
   * Value of input
   * @type {string}
   * @requires
   */
  export let value;

  /**
   * Binding group to retrieve value in parent
   * to check input by default, group value should be equal to input value
   * @type {string}
   * @requires
   */
  export let group;

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
    bind:group
    {id}
    {name}
    {value}
    {disabled}
    {...$$restProps}
  />
  <label for={id}>
    <slot />
  </label>
</div>

<style lang="css">
  @import '@vtmn/css-radio-button';
</style>
