<script lang="ts">
import '@vtmn/css-button/dist/index.css';
import { reactive, computed, defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (val: string) =>
        [
          'primary',
          'primary-reversed',
          'secondary',
          'secondary-reversed',
          'ghost',
          'conversion',
        ].includes(val),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) =>
        ['small', 'medium', 'large', 'stretched'].includes(val),
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    iconAlone: {
      type: String,
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
  <button type="button" :class="classes" v-bind="$attrs">
    <span
      :v-if="!this.iconAlone && this.iconLeft"
      :class="iconLeftClass"
    ></span>
    <span :v-if="this.iconAlone" :class="iconAloneClass"></span>
    <slot :v-if="!this.iconAlone"></slot>
    <span
      :v-if="!this.iconAlone && this.iconRight"
      :class="iconRightClass"
    ></span>
  </button>
</template>
