<script lang="ts">
import '@vtmn/css-toast/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnToast',
  inheritAttrs: false,
  components: { VtmnButton },
  props: {
    withIcon: {
      type: Boolean as PropType<boolean>,
      default: false,
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
        show: true,
        [`vtmn-toast--with-icon-info`]: props.withIcon,
      })),
      handleClose,
    };
  },
});
</script>

<template>
  <div :class="classes" role="status" v-bind="$attrs">
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
