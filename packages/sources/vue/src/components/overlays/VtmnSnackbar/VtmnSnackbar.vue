<script lang="ts">
import '@vtmn/css-snackbar/dist/index-with-vars.css';
import { computed, defineComponent, PropType } from 'vue';
import { VtmnButton } from '../../index';

const INFINITE_TIMEOUT_MS = 9999000;

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSnackbar',
  inheritAttrs: false,
  components: { VtmnButton },
  props: {
    withCloseButton: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    timeout: {
      type: Number as PropType<number>,
      default: 4500,
    },
    actionLabel: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: ['close', 'action'],
  setup(props, { emit }) {
    const handleClose = (event: Event) => {
      return emit('close', (event.target as HTMLInputElement).value);
    };

    const handleAction = (event: Event) => {
      return emit('action', (event.target as HTMLInputElement).value);
    };

    return {
      classes: computed(() => ({
        'vtmn-snackbar': true,
        'show animate-delay': props.timeout > 0,
      })),
      style: {
        '--vtmn-animation_overlay-duration': `${
          typeof props.timeout === 'number' && props.timeout < Infinity
            ? props.timeout
            : INFINITE_TIMEOUT_MS
        }ms`,
      },
      handleClose,
      handleAction,
    };
  },
});
</script>

<template>
  <div :class="classes" :style="style" role="status" v-bind="$attrs">
    <div v-if="$slots.content" class="vtmn-snackbar_content">
      <slot name="content" />
    </div>
    <VtmnButton
      v-if="actionLabel"
      variant="ghost-reversed"
      size="small"
      :aria-label="actionLabel"
      @click="handleAction"
      >{{ actionLabel }}</VtmnButton
    >
    <VtmnButton
      v-if="withCloseButton"
      iconAlone="close-line"
      variant="ghost-reversed"
      size="small"
      aria-label="close"
      @click="handleClose"
    />
  </div>
</template>
