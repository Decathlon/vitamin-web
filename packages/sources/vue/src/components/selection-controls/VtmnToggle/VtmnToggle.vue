<script lang="ts">
import '@vtmn/css-toggle/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnToggleSize } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnToggle',
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    identifier: {
      type: String as PropType<string>,
      default: null,
    },
    labelText: {
      type: String as PropType<string>,
      default: null,
    },
    checked: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<VtmnToggleSize>,
      default: 'medium',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    props = reactive(props);

    const handleChange = (event: Event) => {
      if (event && event.target) {
        return emit(
          'update:modelValue',
          (event.target as HTMLInputElement).checked,
        );
      }
    };

    return {
      classes: computed(() => ({
        'vtmn-toggle': true,
        [`vtmn-toggle_size--${props.size}`]: props.size,
      })),
      handleChange,
    };
  },
});
</script>

<template>
  <div :class="classes">
    <div class="vtmn-toggle_switch">
      <input
        type="checkbox"
        :id="identifier"
        :checked="checked"
        :disabled="disabled"
        @change="handleChange"
      />
      <span aria-hidden="true"></span>
    </div>
    <label :for="identifier">{{ labelText }}</label>
  </div>
</template>
