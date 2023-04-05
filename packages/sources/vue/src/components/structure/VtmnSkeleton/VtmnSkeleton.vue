<script lang="ts">
import '@vtmn/css-skeleton/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnSkeletonShape } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSkeleton',
  inheritAttrs: false,
  props: {
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
    },
    shape: {
      type: String as PropType<VtmnSkeletonShape>,
      default: 'line',
      validator: (val: VtmnSkeletonShape) => ['line', 'avatar'].includes(val),
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'vtmn-skeleton': true,
        [`vtmn-skeleton_${props.shape}`]: props.shape,
      })),
      styles: computed(() => ({
        width: props.width,
        height: props.height,
      })),
    };
  },
});
</script>

<template>
  <span :class="classes" :style="styles" v-bind="$attrs">
    <slot />
  </span>
</template>
