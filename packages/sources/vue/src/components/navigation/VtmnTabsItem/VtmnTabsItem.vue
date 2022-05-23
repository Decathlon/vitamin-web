<script lang="ts">
import '@vtmn/css-tabs/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';
import VtmnBadge from '../../indicators/VtmnBadge/VtmnBadge.vue';
import { defineComponent, PropType } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnTabs',
  components: { VtmnBadge, VtmnIcon },
  props: {
    href: {
      type: String as PropType<string>,
      default: '#',
    },
    icon: {
      type: String as PropType<VitamixId>,
      default: undefined,
    },
    badge: {
      type: Number as PropType<number>,
      default: undefined,
    },
  },
  setup() {
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
  <li role="tab">
    <a :href="href" v-bind="$attrs">
      <VtmnIcon
        v-if="icon"
        :value="icon"
        :style="styleObject"
        aria-hidden="true"
      />
      <slot />
      <VtmnBadge v-if="badge" :value="badge" />
    </a>
  </li>
</template>
