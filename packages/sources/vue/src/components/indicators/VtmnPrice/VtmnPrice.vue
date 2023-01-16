<script lang="ts">
import '@vtmn/css-price/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnPriceSize, VtmnPriceVariant } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnPrice',
  inheritAttrs: false,
  props: {
    variant: {
      type: String as PropType<VtmnPriceVariant>,
      default: 'primary',
      validator: (val: VtmnPriceVariant) =>
        ['default', 'accent', 'alert', 'strikethrough'].includes(val),
    },
    size: {
      type: String as PropType<VtmnPriceSize>,
      default: 'medium',
      validator: (val: VtmnPriceSize) =>
        ['xsmall', 'small', 'medium', 'large'].includes(val),
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
        'vtmn-price': true,
        [`vtmn-price_variant--${props.variant}`]: props.variant,
        [`vtmn-price_size--${props.size}`]: true,
      })),
    };
  },
});
</script>

<template>
  <span :class="classes" v-bind="$attrs"><slot /></span>
</template>
