<script lang="ts">
import '@vtmn/css-navbar/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { reactive, computed, defineComponent, PropType } from 'vue';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';
import { computeRel } from '@/utils/link';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnNavbarLink',
  components: { VtmnIcon },
  props: {
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
    },
  },
  setup(props, { attrs }) {
    props = reactive(props);
    let computedRel =
      (attrs['target'] &&
        computeRel(
          <string>attrs['target'],
          <string | undefined>attrs['rel'],
        )) ||
      '';
    return {
      styleObject: {
        color: 'inherit',
        fontSize: 'inherit',
      },
      classes: computed(() => ({
        'vtmn-navbar_link': true,
      })),
      computedRel,
    };
  },
});
</script>

<template>
  <a :class="classes" v-bind="$attrs" :rel="computedRel">
    <div>
      <slot name="badge"></slot>
      <VtmnIcon :value="icon" aria-hidden="true" />
    </div>
    <slot></slot>
  </a>
</template>
