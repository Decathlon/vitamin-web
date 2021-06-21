<script lang="ts">
import '@vtmn/css-checkbox/dist/index.css';
import { defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnCheckbox',
  props: {
    labelText: {
      type: String,
      default: null,
    },
    identifier: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
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
    class="vtmn-checkbox"
    type="checkbox"
    :checked="this.checked"
    :id="this.identifier"
    :name="this.name"
    :disabled="this.disabled"
    :value="this.value"
    v-bind="$attrs"
  />
  <label :for="this.identifier">{{ this.labelText }}</label>
</template>
