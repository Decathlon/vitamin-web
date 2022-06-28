<script lang="ts">
import '@vtmn/css-dropdown/dist/index-with-vars.css';
import { defineComponent, PropType, reactive } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnDropdown',
  props: {
    label: {
      type: String as PropType<string>,
      default: 'Label',
    },
    summary: {
      type: String as PropType<string>,
      default: 'Dropdown',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props, { attrs }) {
    props = reactive(props);

    const labelId = attrs['id'] ? String(attrs['id']) : undefined;

    return {
      labelId,
    };
  },
});
</script>

<template>
  <div class="vtmn-dropdown" :aria-disabled="disabled">
    <label :for="labelId">{{ label }}</label>
    <details>
      <summary :aria-labelledby="labelId">{{ summary }}</summary>
      <div
        className="vtmn-dropdown_items"
        role="group"
        :aria-labelledby="labelId"
      >
        <slot />
      </div>
    </details>
  </div>
</template>
