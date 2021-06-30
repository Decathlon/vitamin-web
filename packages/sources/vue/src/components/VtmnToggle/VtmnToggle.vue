<script lang="ts">
import '@vtmn/css-toggle/dist/index.css';
import { computed, defineComponent, reactive } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnToggle',
  props: {
    identifier: {
      type: String,
      default: null,
    },
    labelText: {
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
    size: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-toggle': true,
        [`vtmn-toggle_size--${props.size}`]: props.size,
      })),
    };
  },
});
</script>

<template>
  <div :class="classes">
    <div class="vtmn-toggle_switch">
      <input
        type="checkbox"
        :id="this.identifier"
        :checked="this.checked"
        :disabled="this.disabled"
      />
      <span aria-hidden="true"></span>
    </div>
    <label :for="this.identifier">{{ this.labelText }}</label>
  </div>
</template>
