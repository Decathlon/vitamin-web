<script lang="ts">
import '@vtmn/css-alert/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnAlertVariant } from './types';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnAlert',
  components: { VtmnButton },
  inheritAttrs: false,
  props: {
    variant: {
      type: String as PropType<VtmnAlertVariant>,
      default: 'info',
      validator: (val: VtmnAlertVariant) =>
        ['info', 'success', 'warning', 'danger'].includes(val),
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    withCloseButton: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 8000,
    },
    closeCallback: {
      type: Function as PropType<Function>,
      required: true,
    },
  },

  setup(props) {
    props = reactive(props);

    const handleClose = () => {
      return props.closeCallback();
    };
    return {
      classes: computed(() => ({
        'vtmn-alert': true,
        show: true,
        [`vtmn-alert_variant--${props.variant}`]: props.variant,
      })),
      handleClose,
    };
  },
});
</script>

<template>
  <div :class="classes" role="alert" tabindex="-1" v-bind="$attrs">
    <div class="vtmn-alert_content" role="document">
      <div id="alert-title" class="vtmn-alert_content-title">
        {{ title }}
        <VtmnButton
          v-if="withCloseButton"
          iconAlone="close-line"
          variant="ghost-reversed"
          size="small"
          aria-label="close"
          @click.prevent="handleClose"
        />
      </div>
      <p v-if="message" id="alert-text" class="vtmn-alert_content-description">
        {{ message }}
      </p>
    </div>
  </div>
</template>
