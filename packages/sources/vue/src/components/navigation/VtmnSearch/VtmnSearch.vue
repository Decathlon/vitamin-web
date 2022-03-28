<script lang="ts">
import '@vtmn/css-search/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnSearchVariant, VtmnSearchSize } from './types';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSearch',
  components: { VtmnButton },
  props: {
    value: {
      type: String as PropType<string>,
      default: undefined,
    },
    variant: {
      type: String as PropType<VtmnSearchVariant>,
      default: 'medium',
    },
    placeholder: {
      type: String as PropType<string>,
      default: undefined,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<VtmnSearchSize>,
      default: 'medium',
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'vtmn-search': true,
        [`vtmn-search_variant--${props.variant}`]: props.variant,
        [`vtmn-search_size--${props.size}`]: props.size,
      })),
    };
  },
});
</script>

<template>
  <div :class="classes" role="search">
    <input
      type="search"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
    />

    <div class="vtmn-search_buttons">
      <VtmnButton
        iconAlone="close-line"
        variant="ghost"
        :disabled="disabled"
        :size="size"
        aria-label="close"
        :aria-disabled="disabled"
      />

      <VtmnButton
        iconAlone="search-line"
        variant="ghost"
        :disabled="disabled"
        :size="size"
        type="submit"
        aria-label="search"
      />
    </div>
  </div>
</template>
