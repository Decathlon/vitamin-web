<script lang="ts">
import '@vtmn/css-badge/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnBadgeVariant } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnBadge',
  props: {
    variant: {
      type: String as PropType<VtmnBadgeVariant>,
      default: 'default',
      validator: (val: VtmnBadgeVariant) =>
        ['default', 'brand', 'reversed', 'accent', 'alert'].includes(val),
    },
    value: {
      type: Number,
      default: undefined,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'vtmn-badge': true,
        [`vtmn-badge_variant--${props.variant}`]: props.variant,
      })),
    };
  },
});
</script>

<template>
  <span :class="classes" v-bind="$attrs">
    {{ value > 99 ? '99+' : value }}
  </span>
</template>
