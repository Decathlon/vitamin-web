<script lang="ts">
import '@vtmn/css-select/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnSelectOption } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSelect',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Boolean] as PropType<string | number | boolean>,
      default: '',
    },
    identifier: {
      type: String as PropType<string>,
      required: true,
    },
    labelText: {
      type: String as PropType<string>,
      default: null,
    },
    options: {
      type: Object as PropType<VtmnSelectOption[]>,
      required: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    valid: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    error: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    errorText: {
      type: String as PropType<string>,
      default: null,
    },
    border: {
      type: String as PropType<string>,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    props = reactive(props);
    const handleChange = (event: Event) => {
      if (event && event.target) {
        return emit(
          'update:modelValue',
          (event.target as HTMLInputElement).value,
        );
      }
    };
    return {
      containerClasses: computed(() => ({
        'vtmn-select_container': true,
        'vtmn-select--no-border': !props.border,
      })),
      classes: computed(() => ({
        'vtmn-select--error': props.error,
      })),
      handleChange,
    };
  },
});
</script>

<template>
  <div :class="containerClasses">
    <label :v-if="labelText" :for="identifier">
      {{ labelText }}
    </label>
    <select
      :id="identifier"
      :class="classes"
      :value="modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @change="handleChange"
    >
      <option
        v-for="(option, index) in options"
        :value="option.value"
        :key="index"
        :selected="option.value === modelValue"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>

    <p
      v-if="error && errorText"
      :id="`${identifier}-error-text`"
      class="vtmn-select_error-text"
    >
      {{ errorText }}
    </p>
  </div>
</template>
