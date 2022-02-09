<script lang="ts">
import '@vtmn/css-button/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnButtonSize, VtmnButtonType, VtmnButtonVariant } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnButton',
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
      type: String as PropType<string>,
      default: null,
    },
    iconRight: {
      type: String as PropType<string>,
      default: null,
    },
    iconAlone: {
      type: String as PropType<string>,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-btn': true,
        [`vtmn-btn_variant--${props.variant}`]: true,
        [`vtmn-btn_size--${props.size}`]: true,
        'vtmn-btn--icon-left': !props.iconAlone && props.iconLeft,
        'vtmn-btn--icon-right': !props.iconAlone && props.iconRight,
        'vtmn-btn--icon-alone': props.iconAlone,
      })),
      iconLeftClass: computed(() => ({
        [`vtmx-${props.iconLeft}`]: props.iconLeft,
      })),
      iconRightClass: computed(() => ({
        [`vtmx-${props.iconRight}`]: props.iconRight,
      })),
      iconAloneClass: computed(() => ({
        [`vtmx-${props.iconAlone}`]: props.iconAlone,
      })),
    };
  },
});
</script>

<template>
  <button :class="classes" v-bind="$attrs" :disabled="disabled">
    <span :v-if="!iconAlone && iconLeft" :class="iconLeftClass"></span>
    <span :v-if="iconAlone" :class="iconAloneClass"></span>
    <slot :v-if="!iconAlone" />
    <span :v-if="!iconAlone && iconRight" :class="iconRightClass"></span>
  </button>
</template>
