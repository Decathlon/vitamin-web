<script lang="ts">
import '@vtmn/css-tooltip/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnTooltipPosition } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnTooltip',
  inheritAttrs: false,
  props: {
    tooltip: {
      type: String as PropType<string>,
    },
    position: {
      type: String as PropType<VtmnTooltipPosition>,
      default: 'top',
      validator: (val: VtmnTooltipPosition) =>
        [
          'bottom-left',
          'bottom',
          'bottom-right',
          'left',
          'right',
          'top-left',
          'top',
          'top-right',
        ].includes(val),
    },
  },
});
</script>

<template>
  <span
    tabindex="0"
    class="vtmn-tooltip"
    :data-tooltip="tooltip"
    :data-position="position"
    role="tooltip"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>
