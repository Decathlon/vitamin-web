<script lang="ts">
import { reactive, defineComponent, PropType, computed } from 'vue';
import { VtmnIconSize, VtmnIconVariant } from './types';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { retrieveSemanticColor } from './utils';

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
          'primary',
          'secondary',
          'tertiary',
          'action',
          'active',
          'inactive',
          'negative',
          'warning',
          'positive',
          'information',
          'accent',
          'visited',
          'reversed',
          'primary-reversed',
          'action-reserved',
          'visited-reversed',
        ].includes(val),
    },
  },
  setup(props) {
    props = reactive(props);

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
