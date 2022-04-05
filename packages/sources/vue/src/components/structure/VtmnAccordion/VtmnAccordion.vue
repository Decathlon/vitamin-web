<script lang="ts">
import '@vtmn/css-accordion/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnAccordion',
  inheritAttrs: false,
  props: {
    summary: {
      type: String as PropType<string>,
    },
    withIconLeft: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    open: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'vtmn-accordion': true,
        'vtmn-accordion--with-icon-left': props.withIconLeft,
      })),
    };
  },
});
</script>

<template>
  <details
    :class="classes"
    :aria-disabled="disabled"
    :open="open"
    v-bind="$attrs"
  >
    <summary>{{ summary }}</summary>
    <div class="vtmn-accordion_content">
      <slot />
    </div>
  </details>
</template>
