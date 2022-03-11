<script lang="ts">
import { reactive, defineComponent, PropType, computed } from 'vue';
import { VtmnIconSize, VtmnIconVariant } from './types';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnIcon',
  inheritAttrs: false,
  props: {
    value: {
      type: String as PropType<VitamixId>,
      required: true,
    },
    size: {
      type: Number as PropType<VtmnIconSize>,
      default: 24,
      validator: (val: VtmnIconSize) => [16, 24, 32].includes(val),
    },
    variant: {
      type: String as PropType<VtmnIconVariant>,
      default: 'default',
      validator: (val: VtmnIconVariant) =>
        [
          'default',
          'brand',
          'reversed',
          'positive',
          'information',
          'warning',
          'negative',
        ].includes(val),
    },
  },
  setup(props) {
    props = reactive(props);

    const retrieveSemanticColor = (variant: VtmnIconVariant) => {
      switch (variant) {
        case 'default':
          return 'content-primary';
        case 'brand':
          return 'background-brand-primary';
        case 'reversed':
          return 'content-primary-reversed';
        case 'positive':
          return 'content-positive';
        case 'information':
          return 'content-information';
        case 'warning':
          return 'content-warning';
        case 'negative':
          return 'content-negative';
      }
    };

    const style = computed(() => ({
      color: `var(--vtmn-semantic-color_${retrieveSemanticColor(
        props.variant,
      )})`,
      fontSize: `${props.size}px`,
    }));

    const classes = computed(() => ({
      [`vtmx-${props.value}`]: true,
    }));

    return {
      classes,
      style,
    };
  },
});
</script>

<template>
  <span :class="classes" v-bind:style="style" v-bind="$attrs"></span>
</template>
