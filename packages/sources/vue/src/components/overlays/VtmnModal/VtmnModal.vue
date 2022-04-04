<script lang="ts">
import '@vtmn/css-modal/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnAlert',
  components: { VtmnButton },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: undefined,
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
        'vtmn-modal': true,
        show: true,
      })),
      handleClose,
    };
  },
});
</script>

<template>
  <div :class="classes" role="dialog" aria-modal="true" v-bind="$attrs">
    <div
      id="vtmn-modal-background"
      class="vtmn-modal_background-overlay"
      @click.prevent="handleClose"
    />
    <div class="vtmn-modal_content">
      <div class="vtmn-modal_content_title">
        <span id="vtmn-modal-title" class="vtmn-modal_content_title--text">{{
          title
        }}</span>
        <VtmnButton
          aria-label="close"
          variant="ghost"
          size="medium"
          iconAlone="close-line"
          @click.prevent="handleClose"
        />
      </div>
      <slot name="description" />
      <slot name="actions" />
    </div>
  </div>
</template>
