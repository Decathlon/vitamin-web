<script>
  import { createEventDispatcher } from 'svelte';
  import { cn } from '../../../utils/classnames';
  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';

  export let id;
  export let label;
  export let value = 0;
  export let disabled = false;
  export let error;
  export let min = 0;
  export let max;
  export let step = 1;

  let className;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  const dispatch = createEventDispatcher();
  const handleClickSubstract = () => {
    value -= step;
    dispatch('substract', value);
  };
  const handleClickAdd = () => {
    value += step;
    dispatch('add', value);
  };
  const handleInputBlur = () => dispatch('blur', value);

  let disabledMin, disabledMax;
  $: {
    disabledMin = value <= min;
    disabledMax = value >= max;
  }

  $: componentClass = cn('vtmn-quantity', className);
</script>

<div class={componentClass}>
  <label aria-disabled={disabled} for={id}>{label}</label>
  <div aria-disabled={disabled} class="vtmn-quantity_content">
    <VtmnButton
      on:click={handleClickSubstract}
      disabled={disabled || disabledMin}
      variant="secondary"
      iconAlone="subtract-line"
      aria-label="subtract"
    />
    <input
      {disabled}
      type="number"
      {id}
      bind:value
      {min}
      {max}
      {step}
      aria-invalid={!!error}
      aria-describedby={error ? `quantity-helper-${id}` : false}
      on:blur={handleInputBlur}
    />
    <VtmnButton
      on:click={handleClickAdd}
      disabled={disabled || disabledMax}
      variant="secondary"
      iconAlone="add-line"
      aria-label="add"
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
