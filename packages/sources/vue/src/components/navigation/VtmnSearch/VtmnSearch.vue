<script lang="ts">
import '@vtmn/css-search/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnSearchVariant, VtmnSearchSize } from './types';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnSearch',
  components: { VtmnButton },
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: '',
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    props = reactive(props);
    const handleReset = () => {
      return emit('update:modelValue', '');
    };

    return {
      classes: computed(() => ({
        'vtmn-search': true,
        [`vtmn-search_variant--${props.variant}`]: props.variant,
        [`vtmn-search_size--${props.size}`]: props.size,
      })),
      handleReset,
    };
  },
});
</script>

<template>
  <div :class="classes" role="search">
    <input
      type="search"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="modelValue"
      v-bind="$attrs"
    />

    <div class="vtmn-search_buttons">
      <VtmnButton
        iconAlone="close-line"
        variant="ghost"
        :disabled="disabled"
        :size="size"
        aria-label="close"
        :aria-disabled="disabled"
        @click="handleReset"
        v-bind="$attrs"
      />

      <VtmnButton
        iconAlone="search-line"
        variant="ghost"
        :disabled="disabled"
        :size="size"
        type="submit"
        aria-label="search"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
