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
  setup(props, { attrs }) {
    props = reactive(props);

    let computedRel = '';

    if (String(attrs['target']) === '_blank') {
      if (attrs['rel'] !== undefined) {
        computedRel = Array.from(
          new Set(String(attrs['rel']).split(' '))
            .add('noopener')
            .add('noreferrer'),
        )
          .join(' ')
          .trim();
      } else {
        computedRel = 'noopener noreferrer';
      }
    } else {
      computedRel = String(attrs['rel']);
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
  <a :rel="computedRel" :class="classes" v-bind="$attrs">
    <slot />
  </a>
</template>
