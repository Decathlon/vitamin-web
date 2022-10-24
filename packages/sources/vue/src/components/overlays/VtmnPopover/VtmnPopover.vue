<script lang="ts">
import '@vtmn/css-popover/dist/index-with-vars.css';
import { defineComponent, PropType } from 'vue';
import { VtmnPopoverPosition } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnPopover',
  inheritAttrs: false,
  props: {
    id: {
      type: String as PropType<string>,
      required: true,
    },
    position: {
      type: String as PropType<VtmnPopoverPosition>,
      default: 'top',
      validator: (val: VtmnPopoverPosition) =>
        [
          'top-left',
          'top',
          'top-right',
          'right',
          'bottom-right',
          'bottom',
          'bottom-left',
          'left',
        ].includes(val),
    },
    title: {
      type: String as PropType<string>,
    },
    body: {
      type: String as PropType<string>,
    },
  },
});
</script>

<template>
  <div
    class="vtmn-popover"
    :data-position="position"
    :aria-describedby="id"
    :aria-labelledby="id + '-title'"
    tabindex="0"
    v-bind="$attrs"
  >
    <slot />

    <div :id="id" role="dialog">
      <p :id="id + '-title'" class="vtmn-popover_title" role="heading">
        {{ title }}
      </p>
      <p class="vtmn-popover_text">{{ body }}</p>
    </div>
  </div>
</template>
