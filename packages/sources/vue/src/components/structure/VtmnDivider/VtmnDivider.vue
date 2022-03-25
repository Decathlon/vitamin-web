<script lang="ts">
import '@vtmn/css-divider/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnDividerOrientation, VtmnDividerTextPosition } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnDivider',
  props: {
    orientation: {
      type: String as PropType<VtmnDividerOrientation>,
      default: 'horizontal',
      validator: (val: VtmnDividerOrientation) =>
        ['horizontal', 'vertical'].includes(val),
    },
    textPosition: {
      type: String as PropType<VtmnDividerTextPosition>,
      default: 'center',
      validator: (val: VtmnDividerTextPosition) =>
        ['start', 'center', 'end'].includes(val),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    props = reactive(props);

    const handleChange = (event: Event) => {
      if (event && event.target) {
        return emit(
          'update:modelValue',
          (event.target as HTMLInputElement).checked,
        );
      }
    };

    return {
      classes: computed(() => ({
        'vtmn-divider': true,
        [`vtmn-divider_orientation--${props.orientation}`]: props.orientation,
        [`vtmn-divider_text-position--${props.textPosition}`]:
          props.textPosition,
      })),
      handleChange,
    };
  },
});
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
