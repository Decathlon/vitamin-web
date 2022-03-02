<script lang="ts">
import '@vtmn/css-button/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnButtonSize, VtmnButtonVariant } from './types';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnButton',
  components: { VtmnIcon },
  props: {
    variant: {
      type: String as PropType<VtmnButtonVariant>,
      default: 'primary',
      validator: (val: VtmnButtonVariant) =>
        [
          'primary',
          'primary-reversed',
          'secondary',
          'tertiary',
          'ghost',
          'ghost-reversed',
          'conversion',
        ].includes(val),
    },
    size: {
      type: String as PropType<VtmnButtonSize>,
      default: 'medium',
      validator: (val: VtmnButtonSize) =>
        ['small', 'medium', 'large', 'stretched'].includes(val),
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    iconLeft: {
      type: String as PropType<VitamixId>,
      default: null,
    },
    iconRight: {
      type: String as PropType<VitamixId>,
      default: null,
    },
    iconAlone: {
      type: String as PropType<VitamixId>,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      styleObject: {
        color: 'inherit',
        fontSize: 'inherit'
      },
      classes: computed(() => ({
        'vtmn-btn': true,
        [`vtmn-btn_variant--${props.variant}`]: true,
        [`vtmn-btn_size--${props.size}`]: true,
        'vtmn-btn--icon-left': !props.iconAlone && props.iconLeft,
        'vtmn-btn--icon-right': !props.iconAlone && props.iconRight,
        'vtmn-btn--icon-alone': props.iconAlone,
      })),
    };
  },
});
</script>

<template>
  <button :class="classes" v-bind="$attrs" :disabled="disabled">
    <VtmnIcon v-if="!iconAlone && iconLeft" :value="iconLeft" :style="styleObject" />
    <VtmnIcon v-if="iconAlone" :value="iconAlone" :style="styleObject" />
      <slot v-if="!iconAlone" />
    <VtmnIcon v-if="!iconAlone && iconRight" :value="iconRight" :style="styleObject" />
  </button>
</template>
