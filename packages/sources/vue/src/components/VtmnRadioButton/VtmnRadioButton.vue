<script lang="ts">
import '@vtmn/css-radio-button/dist/index.css';
import { defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnRadioButton',
  props: {
    identifier: {
      type: String,
      default: null,
    },
    labelText: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <input
    class="vtmn-radio-button"
    type="radio"
    :id="this.identifier"
    :name="this.name"
    :value="this.value"
    :checked="this.checked"
    :disabled="this.disabled"
    v-bind="$attrs"
  />
  <label :for="this.identifier">{{ this.labelText }}</label>
</template>
