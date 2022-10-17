<script lang="ts">
import '@vtmn/css-link/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnLinkSize } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnLink',
  inheritAttrs: false,
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
  setup(props, { attrs }) {
    props = reactive(props);

    let computedRel = String(attrs['rel']);

    // If target is set to '_blank', rel should be at least
    // set to 'noopener noreferrer'
    if (String(attrs['target']) === '_blank') {
      const currentRel = attrs['rel'] ?? ''
      computedRel = Array.from(
        new Set(String(currentRel).split(' '))
          .add('noopener')
          .add('noreferrer'),
      )
        .join(' ')
        .trim();
    }

    return {
      classes: computed(() => ({
        'vtmn-link': true,
        [`vtmn-link_size--${props.size}`]: true,
        'vtmn-link--standalone': props.standalone,
        'vtmn-link--reversed': props.reversed,
        'vtmn-link--icon-along': props.iconAlong && props.standalone,
      })),
      computedRel,
    };
  },
});
</script>

<template>
  <a v-bind="$attrs" :rel="computedRel" :class="classes">
    <slot />
  </a>
</template>
