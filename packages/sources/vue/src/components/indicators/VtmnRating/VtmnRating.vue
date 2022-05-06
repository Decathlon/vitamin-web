<script lang="ts">
import '@vtmn/css-rating/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnRatingSize } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnRating',
  inheritAttrs: false,
  props: {
    name: {
      type: String as PropType<string>,
    },
    emphasis: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<VtmnRatingSize>,
      default: 'medium',
      validator: (val: VtmnRatingSize) => ['small', 'medium'].includes(val),
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    compact: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: Number as PropType<number>,
      default: 0,
    },
    showValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    comments: {
      type: Number as PropType<number>,
      default: undefined,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      styleObject: {
        color: 'inherit',
        fontSize: 'inherit',
      },
      classes: computed(() => ({
        'vtmn-rating': true,
        [`vtmn-rating_size--${props.size}`]: true,
        ['vtmn-rating_variant--brand']: props.emphasis,
      })),
    };
  },
});
</script>

<template>
  <div :class="classes" :aria-disabled="disabled" v-bind="$attrs"></div>
</template>
