<script lang="ts">
import '@vtmn/css-link/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnLoaderSize } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnLoader',
  props: {
    size: {
      type: String as PropType<VtmnLoaderSize>,
      default: 'medium',
      validator: (val: VtmnLoaderSize) =>
        ['small', 'medium', 'large'].includes(val),
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-loader': true,
        [`vtmn-loader_size--${props.size}`]: true,
      })),
    };
  },
});
</script>

<template>
  <div :class="classes"></div>
</template>
