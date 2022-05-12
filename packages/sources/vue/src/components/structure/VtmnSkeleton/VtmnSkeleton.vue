<script lang="ts">
import '@vtmn/css-skeleton/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnSkeletonShape } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSkeleton',
  inheritAttrs: false,
  props: {
    width: {
      type: Number as PropType<number>,
      default: 0,
      validator: (val: number) => val >= 0 && val <= 100,
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
        width: `${props.width}%`,
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
