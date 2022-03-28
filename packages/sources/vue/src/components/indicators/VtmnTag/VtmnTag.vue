<script lang="ts">
import '@vtmn/css-tag/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnTagVariant } from './types';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnTag',
  inheritAttrs: false,
  components: { VtmnIcon },
  props: {
    href: {
      type: String as PropType<string>,
      default: undefined,
    },
    variant: {
      type: String as PropType<VtmnTagVariant>,
      default: 'accent',
      validator: (val: VtmnTagVariant) =>
        [
          'accent',
          'alert',
          'brand',
          'decorative_gravel',
          'decorative_brick',
          'decorative_saffron',
          'decorative_gold',
          'decorative_jade',
          'decorative_emerald',
          'decorative_cobalt',
          'decorative_amethyst',
        ].includes(val),
    },
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      styleObject: {
        color: 'inherit',
        fontSize: 'inherit',
      },
      classes: computed(() => ({
        'vtmn-tag': true,
        [`vtmn-tag_variant--${props.variant}`]: props.variant,
      })),
    };
  },
});
</script>

<template>
  <a v-if="href" :href="href" :class="classes" v-bind="$attrs"
    ><VtmnIcon v-if="icon" :value="icon" :style="styleObject" /><slot
  /></a>
  <span v-else :class="classes" v-bind="$attrs"
    ><VtmnIcon v-if="icon" :value="icon" :style="styleObject" /><slot
  /></span>
</template>
