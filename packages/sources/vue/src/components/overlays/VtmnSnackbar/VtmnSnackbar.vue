<script lang="ts">
import '@vtmn/css-snackbar/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnButton } from '../../index';
export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSnackbar',
  inheritAttrs: false,
  components: { VtmnButton },
  props: {
    withCloseButton: {
      type: Boolean as PropType<Boolean>,
      default: false,
    },
    actionLabel: {
      type: String as PropType<String>,
      default: undefined,
    },
  },
  emits: ['close', 'action'],
  setup(props, { emit }) {
    props = reactive(props);

    const handleClose = (event: Event) => {
      return emit('close', (event.target as HTMLInputElement).value);
    };

    const handleAction = (event: Event) => {
      return emit('action', (event.target as HTMLInputElement).value);
    };

    return {
      classes: computed(() => ({
        'vtmn-snackbar': true,
        show: true,
      })),
      handleClose,
      handleAction,
    };
  },
});
</script>

<template>
  <div :class="classes" role="status" v-bind="$attrs">
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
