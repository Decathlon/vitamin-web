<script lang="ts">
import '@vtmn/css-text-input/dist/index.css';
import { reactive, computed, defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnTextInput',
  props: {
    identifier: {
      type: String,
      default: null,
    },
    labelText: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    helperText: {
      type: String,
      default: null,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: null,
      validator: (val: string) => ['valid', 'error', null].includes(val),
    },
    icon: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-text-input': true,
        [`vtmn-text-input--${props.state}`]: props.state,
      })),
      helperClasses: computed(() => ({
        'vtmn-text-input_helper-text': true,
        [`vtmn-text-input_helper-text--${props.state}`]: props.state,
      })),
      iconClass: computed(() => ({
        [`vtmx-${props.icon}`]: props.icon,
      })),
    };
  },
});
</script>

<template>
  <label class="vtmn-text-input_label" :for="this.identifier">
    {{ this.labelText }}
  </label>
  <textarea
    v-if="this.multiline"
    :class="classes"
    :id="this.identifier"
    :placeholder="this.placeholder"
    :disabled="this.disabled"
  ></textarea>
  <div v-if="!this.multiline" class="vtmn-text-input_container">
    <input
      type="text"
      :class="classes"
      :id="this.identifier"
      :placeholder="this.placeholder"
      :disabled="this.disabled"
    />
    <span :v-if="this.icon" :class="iconClass"></span>
  </div>
  <p :class="helperClasses">
    {{ this.helperText }}
  </p>
</template>
