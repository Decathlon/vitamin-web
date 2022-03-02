<script>
  /** @restProps { list } */

  const SLOTS = $$props.$$slots;

  /**
   * The size of the list.
   *
   * @type {'small' | 'medium'} [medium]
   * @defaultValue 'medium'
   */
  export let size = 'medium';

  /**
   * Hide or show list items divider.
   *
   * @type {boolean} [hideDivider]
   * @defaultValue false
   */
  export let hideDivider = false;

  /**
   * Index of item in list.
   *
   * @type {number} item
   */
  export let index;

  /**
   * Set disabled state of list item.
   *
   * @type {boolean} [disabled]
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * Primary label of list item.
   *
   * @type {string} primaryLabel
   */
  export let primaryLabel;

  /**
   * Secondary text label.
   *
   * @type {string} [secondaryLabel]
   */
  export let secondaryLabel = null;

  /**
   * Delete slot div from de DOM if slot doesn't exist.
   *
   * @param {'start-visual' | 'end-action'} slotName - Start or end slot name.
   * @returns {boolean} slotExist
   */
  const checkSlotExist = (slotName) => {
    return SLOTS && SLOTS[slotName] && SLOTS[slotName].length;
  };
</script>

<li
  on:click
  class={`vtmn-list_item-size--${size}`}
  class:vtmn-list_item--without-divider={hideDivider}
  role="option"
  tabindex={index}
  aria-disabled={disabled}
  {...$$restProps}
>
  {#if checkSlotExist('start-visual')}
    <div class="vtmn-list_start-visual">
      <slot name="start-visual" />
    </div>
  {/if}

  <div class="vtmn-list_text">
    <span>{primaryLabel}</span>

    {#if secondaryLabel}
      <span>{secondaryLabel}</span>
    {/if}
  </div>

  {#if checkSlotExist('end-action')}
    <div class="vtmn-list_end-action">
      <slot name="end-action" />
    </div>
  {/if}
</li>
