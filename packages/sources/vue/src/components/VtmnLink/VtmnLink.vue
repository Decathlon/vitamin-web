<script lang="ts">
import '@vtmn/css-link/dist/index.css';
import { reactive, computed, defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnLink',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => ['small', 'medium', 'large'].includes(val),
    },
    isStandalone: {
      type: Boolean,
      default: false,
    },
    hasIconAlong: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-link': true,
        [`vtmn-link_size--${props.size}`]: true,
        'vtmn-link--standalone': props.isStandalone,
        'vtmn-link--icon-along': props.hasIconAlong,
      })),
    };
  },
});
</script>

<template>
  <a :class="classes" v-bind="$attrs">
    <slot></slot>
  </a>
</template>
