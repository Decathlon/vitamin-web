<script lang="ts">
import '@vtmn/css-link/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnLinkSize } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnLink',
  props: {
    size: {
      type: String as PropType<VtmnLinkSize>,
      default: 'medium',
      validator: (val: VtmnLinkSize) =>
        ['small', 'medium', 'large'].includes(val),
    },
    standalone: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    reversed: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    iconAlong: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-link': true,
        [`vtmn-link_size--${props.size}`]: true,
        'vtmn-link--standalone': props.standalone,
        'vtmn-link--reversed': props.reversed,
        'vtmn-link--icon-along': props.iconAlong && props.standalone,
      })),
    };
  },
});
</script>

<template>
  <a :class="classes" v-bind="$attrs">
    <slot />
  </a>
</template>
