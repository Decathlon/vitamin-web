<script>
  import { VTMN_LISTITEM_SIZE } from './enums';
  import { cn } from '../../../utils/classnames';
  import { computeRel } from '../../../utils/link';
  import { createEventDispatcher } from 'svelte';
  import { ENTER } from '../../../utils/keyCodes';

  /** @restProps */

  const SLOTS = $$props.$$slots;
  const dispatch = createEventDispatcher();
  let listElement;

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
   * Set disabled state of list item.
   *
   * @type {boolean} [disabled]
   * @defaultValue false
   */
  export let disabled = false;

  /**
   * Set if the list item is a link
   * @type {string}
   */
  export let href = undefined;

  /**
   * If the list item is a link, add a target
   * @type {string}
   * @default _blank
   */
  export let target = '_blank';

  /**
   * If the list item is a link, add a rel
   * @type {string}
   */
  export let rel = undefined;

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

  const handleSelectItem = (e) => {
    if (!e.keyCode || e.keyCode === ENTER) {
      dispatch('click');
    }
  };
</script>

<!-- svelte-ignore a11y-role-has-required-aria-props -->
<!-- This will be refactored in next major release -->
<li
  bind:this={listElement}
  on:click|stopPropagation={handleSelectItem}
  on:keydown|stopPropagation={handleSelectItem}
  class={componentClass}
  role="option"
  tabindex={href ? -1 : 0}
  aria-disabled={disabled}
  {...$$restProps}
>
  {#if href}
    <a
      class="vtmn-list__link"
      tabindex={disabled && -1}
      {href}
      {target}
      on:click|stopPropagation
      on:keydown={(e) => e.stopPropagation()}
      rel={computeRel(target, rel)}
      aria-label={$$restProps['aria-label']}
      aria-disabled={disabled}
    >
      {#if checkSlotExists('start-visual')}
        <div
          class="vtmn-list_start-visual"
          on:click={(e) => e.stopPropagation()}
          on:keydown={(e) => e.stopPropagation()}
        >
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
    </a>
  {:else}
    {#if checkSlotExists('start-visual')}
      <div
        class="vtmn-list_start-visual"
        on:click={(e) => e.stopPropagation()}
        on:keydown={(e) => e.stopPropagation()}
      >
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
  {/if}
  {#if checkSlotExists('end-action')}
    <div
      class="vtmn-list_end-action"
      on:click={(e) => e.stopPropagation()}
      on:keydown={(e) => e.stopPropagation()}
    >
      <slot name="end-action" />
    </div>
  {/if}
</li>
