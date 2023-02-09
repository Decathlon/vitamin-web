<script>
  import { createEventDispatcher } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';

  /**
   * @type {string} id of the input
   */
  export let id;

  /**
   * @type {string} label displayed for the input
   */
  export let label;

  /**
   * @type {number} current value of the input
   */
  export let value = 0;

  /**
   * @type {boolean} disable the input
   */
  export let disabled = false;

  /**
   * @type {boolean} displays the quantity at 100% of its parent's width
   */
  export let fullWidth = false;

  /**
   * @type {string} error text displayed under the input
   */
  export let error = undefined;

  /**
   * @type {number} minimum value of the input
   */
  export let min = -Infinity;

  /**
   * @type {number} maximum value of the input
   */
  export let max = Infinity;

  /**
   * @type {number} step of the input. Will be add on the value when subtract or add event.
   * @default 1
   */
  export let step = 1;

  /**
   * The size of the quantity.
   * @type {'small' | 'medium'}
   * @defaultValue 'medium'
   */
  export let size = 'medium';

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  const dispatch = createEventDispatcher();
  const handleClickSubtract = () => {
    value -= step;
    dispatch('subtract', value);
    dispatch('change', { value, action: 'subtract' });
  };
  const handleClickAdd = () => {
    value += step;
    dispatch('add', value);
    dispatch('change', { value, action: 'add' });
  };

  let disabledMin, disabledMax;
  $: {
    disabledMin = value <= min;
    disabledMax = value >= max;
  }

  $: componentClass = cn(
    'vtmn-quantity',
    size && `vtmn-quantity_size--${size}`,
    fullWidth && 'vtmn-quantity--full-width',
    className,
  );
</script>

<div class={componentClass}>
  <label aria-disabled={disabled} for={id}>{label}</label>
  <div aria-disabled={disabled} class="vtmn-quantity_content">
    <VtmnButton
      on:click={handleClickSubtract}
      disabled={disabled || disabledMin}
      variant="secondary"
      iconAlone="subtract-line"
      aria-label="subtract"
      {size}
    />
    <input
      type="number"
      bind:value
      {id}
      {disabled}
      {min}
      {max}
      {step}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `quantity-helper-${id}` : undefined}
      on:change
    />
    <VtmnButton
      on:click={handleClickAdd}
      disabled={disabled || disabledMax}
      variant="secondary"
      iconAlone="add-line"
      aria-label="add"
      {size}
    />
  </div>
  {#if error}
    <p id={`quantity-helper-${id}`} class="vtmn-quantity_error-text">
      {error}
    </p>
  {/if}
</div>

<style>
  @import '@vtmn/css-quantity';
</style>
