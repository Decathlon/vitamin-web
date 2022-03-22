<script>
  /** @restProps */

  // const SLOTS = $$props.$$slots;

  /**
   * Delete slot div from de DOM if slot doesn't exist.
   *
   * @param {'text'} slotName
   * @returns {boolean} slotExists
   */
  /* const checkSlotExists = (slotName) => {
    return SLOTS && SLOTS[slotName] && SLOTS[slotName].length;
  }; */
</script>

<li>
  <!-- {#if checkSlotExists('text')} -->
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="">
    <!-- <slot name="text" /> -->
    <slot />
  </a>
  <!-- {/if} -->
</li>
