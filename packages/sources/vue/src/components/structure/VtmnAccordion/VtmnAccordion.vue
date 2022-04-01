<script lang="ts">
import '@vtmn/css-accordion/dist/index-with-vars.css';
import { reactive, computed, defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnAccordion',
  inheritAttrs: false,
  props: {
    summary: {
      type: String,
    },
    withIconLeft: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
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
