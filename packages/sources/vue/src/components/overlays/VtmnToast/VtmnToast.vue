<script lang="ts">
import '@vtmn/css-toast/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnButton } from '../../index';

const INFINITE_TIMEOUT_MS = 9999000;

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnToast',
  inheritAttrs: false,
  components: { VtmnButton },
  props: {
    withIcon: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    timeout: {
      type: Number as PropType<number>,
      default: 4500,
    },
    withCloseButton: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    props = reactive(props);

    const handleClose = (event: Event) => {
      return emit('close', (event.target as HTMLInputElement).value);
    };

    return {
      classes: computed(() => ({
        'vtmn-toast': true,
        'show animate-delay': props.timeout > 0,
        [`vtmn-toast--with-icon-info`]: props.withIcon,
      })),
      style: {
        '--vtmn-animation_overlay-duration': `${
          typeof props.timeout === 'number' && props.timeout < Infinity
            ? props.timeout
            : INFINITE_TIMEOUT_MS
        }ms`,
      },
      handleClose,
    };
  },
});
</script>

<template>
  <div :class="classes" :style="style" role="status" v-bind="$attrs">
    <div v-if="$slots.content" class="vtmn-toast_content">
      <slot name="content" />
    </div>
    <VtmnButton
      v-if="withCloseButton"
      icon-alone="close-line"
      variant="ghost-reversed"
      size="small"
      aria-label="close"
      @close.prevent="handleClose"
    />
  </div>
</template>
