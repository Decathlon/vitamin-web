<script lang="ts">
import '@vtmn/css-button/dist/index.css';
import { reactive, computed, defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (val: string) =>
        [
          'primary',
          'primary-reversed',
          'secondary',
          'secondary-reversed',
          'ghost',
          'conversion',
        ].includes(val),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) =>
        ['small', 'medium', 'large', 'stretched'].includes(val),
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-btn': true,
        [`vtmn-btn_variant--${props.variant}`]: true,
        [`vtmn-btn_size--${props.size}`]: true,
      })),
    };
  },
});
</script>

<template>
  <button type="button" :class="classes" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
