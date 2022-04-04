<script lang="ts">
import '@vtmn/css-snackbar/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnButton } from '../../index';
export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSnackbar',
  inheritAttrs: false,
  components: { VtmnButton },
  props: {
    content: {
      type: String as PropType<String>,
      required: true,
    },
    withCloseButton: {
      type: Boolean as PropType<Boolean>,
      default: false,
    },
    actionLabel: {
      type: String as PropType<String>,
      default: undefined,
    },
    closeCallBack: {
      type: Function as PropType<Function>,
      required: true,
    },
    actionCallBack: {
      type: Function as PropType<Function>,
      required: true,
    },
  },
  setup(props) {
    props = reactive(props);

    const handleClose = () => {
      return props.closeCallBack;
    };

    const handleAction = () => {
      return props.actionCallBack;
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
  <div class="vtmn-snackbar" role="status" v-bind="$attrs">
    <div class="vtmn-snackbar_content">
      {{ content }}
    </div>
    <VtmnButton
      v-if="actionLabel"
      variant="ghost-reversed"
      size="small"
      :aria-label="actionLabel"
      @click.prevent="handleAction"
    >{{ actionLabel }}</VtmnButton>
    <VtmnButton
      v-if="withCloseButton"
      iconAlone="close-line"
      variant="ghost-reversed"
      size="small"
      aria-label="close"
      @click.prevent="handleClose"
    />
  </div>
</template>
