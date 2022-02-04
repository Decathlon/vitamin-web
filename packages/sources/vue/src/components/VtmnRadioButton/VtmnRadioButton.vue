<script lang="ts">
import '@vtmn/css-radio-button/dist/index-with-vars.css';
import { defineComponent, PropType } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnRadioButton',
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    },
    identifier: {
      type: String as PropType<string>,
      default: null,
    },
    labelText: {
      type: String as PropType<string>,
      default: null,
    },
    name: {
      type: String as PropType<string>,
      default: null,
    },
    value: {
      type: [String, Number] as PropType<string | number>,
      default: null,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue']
});
</script>

<template>
  <input
    class="vtmn-radio-button"
    type="radio"
    :id="identifier"
    :name="name"
    :value="value"
    :checked="modelValue === value"
    :disabled="disabled"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
  />
  <label :for="identifier">{{ labelText }}</label>
</template>
