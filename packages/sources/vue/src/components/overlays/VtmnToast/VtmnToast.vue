<script lang="ts">
import '@vtmn/css-toast/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnToast',
  inheritAttrs: false,
  components: { VtmnButton },
  props: {
    withIcon: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      required: true,
    },
    withCloseButton: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 8000,
    },
  },
  setup(props) {
    props = reactive(props);
    const handleClose = () => {
      return props.closeCallback();
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
    <div class="vtmn-toast_content">{{ content }}</div>
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
