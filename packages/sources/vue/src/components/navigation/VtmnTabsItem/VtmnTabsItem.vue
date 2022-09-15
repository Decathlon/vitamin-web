<script lang="ts">
import '@vtmn/css-tabs/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';
import VtmnBadge from '../../indicators/VtmnBadge/VtmnBadge.vue';
import { reactive, computed, defineComponent, PropType } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnTabs',
  components: { VtmnBadge, VtmnIcon },
  props: {
    icon: {
      type: String as PropType<VitamixId>,
      default: undefined,
    },
    badgeValue: {
      type: Number as PropType<number>,
      default: undefined,
    },
    selected: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      styleObject: {
        color: 'inherit',
        fontSize: 'inherit',
      },
    };
  },
});
</script>

<template>
  <li>
    <button role="tab" v-bind="$attrs">
      <VtmnIcon
        v-if="icon"
        :value="icon"
        :style="styleObject"
        aria-hidden="true"
      />
      <slot />
      <VtmnBadge v-if="badgeValue" :value="badgeValue" />
    </button>
  </li>
</template>
