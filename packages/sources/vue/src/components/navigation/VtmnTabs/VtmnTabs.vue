<script lang="ts">
import '@vtmn/css-tabs/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import VtmnDivider from '../../structure/VtmnDivider/VtmnDivider.vue';

import { VtmnTabsAlign, VtmnTabsSize } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnTabs',
  components: { VtmnDivider },
  props: {
    align: {
      type: String as PropType<VtmnTabsAlign>,
      default: 'start',
      validator: (val: VtmnTabsAlign) =>
        ['start', 'center', 'end'].includes(val),
    },
    size: {
      type: String as PropType<VtmnTabsSize>,
      default: 'medium',
      validator: (val: VtmnTabsSize) => ['small', 'medium'].includes(val),
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-tabs': true,
        [`vtmn-tabs_align--${props.align}`]: props.align,
        [`vtmn-tabs_size--${props.size}`]: props.size,
      })),
    };
  },
});
</script>

<template>
  <div :class="classes" role="tablist" v-bind="$attrs">
    <slot />
  </div>
  <VtmnDivider />
</template>
