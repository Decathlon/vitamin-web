<script>
  import { VTMN_LISTITEM_SIZE } from './enums';
  import { cn } from '../../../utils/classnames';

  /** @restProps */

  const SLOTS = $$props.$$slots;

  /**
   * The size of the list.
   *
   * @type {'small' | 'medium'} [medium]
   * @defaultValue 'medium'
   */
  export let size = VTMN_LISTITEM_SIZE.MEDIUM;

  /**
   * Has divider.
   *
   * @type {boolean} [divider]
   * @defaultValue true
   */
  export let divider = true;

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

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn(
    `vtmn-list_item-size--${size}`,
    !divider && 'vtmn-list_item--without-divider',
    className,
  );

  /**
   * Delete slot div from de DOM if slot doesn't exist.
   *
   * @param {'start-visual' | 'text' | 'subtext' | 'end-action'} slotName
   * @returns {boolean} slotExists
   */
  const checkSlotExists = (slotName) => {
    return SLOTS && SLOTS[slotName] && SLOTS[slotName].length;
  };
</script>

<li
  on:click
  class={componentClass}
  role="option"
  tabindex={index}
  aria-disabled={disabled}
  {...$$restProps}
>
  {#if checkSlotExists('start-visual')}
    <div class="vtmn-list_start-visual">
      <slot name="start-visual" />
    </div>
  {/if}

  {#if checkSlotExists('text')}
    <div class="vtmn-list_text">
      <slot name="text" />

      {#if checkSlotExists('subtext')}
        <slot name="subtext" />
      {/if}
    </div>
  {/if}

  {#if checkSlotExists('end-action')}
    <div class="vtmn-list_end-action">
      <slot name="end-action" />
    </div>
  {/if}
</li>
