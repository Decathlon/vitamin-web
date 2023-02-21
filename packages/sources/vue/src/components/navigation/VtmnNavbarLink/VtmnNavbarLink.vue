<script lang="ts">
import '@vtmn/css-navbar/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { reactive, computed, defineComponent, PropType } from 'vue';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnNavbarLink',
  components: { VtmnIcon },
  props: {
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
    },
    label: {
      type: String as PropType<string>,
    },
    showLabel: {
      type: Boolean as PropType<boolean>,
      default: true,
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
        'vtmn-navbar_link': true,
        'vtmn-navbar_link--icon-alone': !props.showLabel,
      })),
    };
  },
});
</script>

<template>
  <template v-if="showLabel">
    <a :class="classes" v-bind="$attrs">
      <VtmnIcon :value="icon" aria-hidden="true" />{{ label }}</a
    >
  </template>
  <template v-else>
    <a :class="classes" v-bind="$attrs">
      <VtmnIcon :value="icon" aria-hidden="true" />
      <span class="vtmn-sr-only">{{ label }}</span>
    </a>
  </template>
</template>
