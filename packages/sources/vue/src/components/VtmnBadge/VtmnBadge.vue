<script lang="ts">
// import '@vtmn/css-badge/dist/index.css'; How to create a new lib with this ?
import { reactive, computed, defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnBadge',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (val: string) => ['primary', 'outside'].includes(val),
    },
    position: {
      type: String,
      default: 'top',
      validator: (val: string) => ['top', 'bottom'].includes(val),
    },
    content: {
      type: String,
      required: true,
    },
    hide: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-badge-content': true,
        'vtmn-badge-hide': props.hide,
        [`vtmn-badge-position-${props.position}-${props.variant}`]: true,
        [`vtmn-badge-position-${props.variant}`]: true,
      })),
    };
  },
});
</script>

<template>
  <div class="vtmn-badge">
    <div :class="classes" v-bind="$attrs">
      <span>{{ content }}</span>
    </div>
    <slot />
  </div>
</template>
