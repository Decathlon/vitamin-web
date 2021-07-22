<script lang="ts">
import '@vtmn/css-link/dist/index.css';
import { reactive, computed, defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnLink',
  props: {
    href: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: '_self',
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => ['small', 'medium', 'large'].includes(val),
    },
    standalone: {
      type: Boolean,
      default: false,
    },
    iconAlong: {
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
        'vtmn-link--standalone': props.standalone,
        'vtmn-link--icon-along': props.iconAlong && props.standalone,
      })),
    };
  },
});
</script>

<template>
  <a :href="href" :target="target" :class="classes" v-bind="$attrs">
    <slot></slot>
  </a>
</template>
