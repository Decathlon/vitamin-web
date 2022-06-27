<script lang="ts">
import '@vtmn/css-divider/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnDividerOrientation, VtmnDividerTextPosition } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnDivider',
  inheritAttrs: false,
  props: {
    orientation: {
      type: String as PropType<VtmnDividerOrientation>,
      default: 'horizontal',
      validator: (val: VtmnDividerOrientation) =>
        ['horizontal', 'vertical'].includes(val),
    },
    textPosition: {
      type: String as PropType<VtmnDividerTextPosition>,
      default: 'start',
      validator: (val: VtmnDividerTextPosition) =>
        ['start', 'center', 'end'].includes(val),
    },
    labelId: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'vtmn-divider': true,
        [`vtmn-divider_orientation--${props.orientation}`]: props.orientation,
        [`vtmn-divider_text-position--${props.textPosition}`]:
          props.textPosition,
      })),
    };
  },
});
</script>

<template>
  <div
    :class="classes"
    v-bind="$attrs"
    role="separator"
    :aria-orientation="orientation"
    :aria-labelledby="labelId"
  >
    <span v-if="$slots['default']" :id="labelId"><slot /></span>
  </div>
</template>
