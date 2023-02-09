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
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    showSearchButton: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    size: {
      type: String as PropType<VtmnSearchSize>,
      default: 'medium',
    },
  },
  emits: ['update:modelValue', 'search'],
  setup(props, { emit }) {
    props = reactive(props);

    const handleChange = (event: Event) => {
      if (event && event.target) {
        return emit(
          'update:modelValue',
          (event.target as HTMLInputElement).value,
        );
      }
    };

    const handleSearch = () => {
      return emit('search', props.modelValue);
    };

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
      handleChange,
      handleSearch,
    };
  },
});
</script>

<template>
  <div :class="classes" role="search">
    <input
      type="search"
      :value="modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @input="handleChange"
    />

    <div class="vtmn-search_buttons">
      <VtmnButton
        icon-alone="close-line"
        variant="ghost"
        :disabled="disabled"
        :size="size"
        aria-label="close"
        :aria-disabled="disabled"
        @click.prevent="handleReset"
      />

      <VtmnButton
        icon-alone="search-line"
        variant="ghost"
        :disabled="disabled"
        :size="size"
        type="submit"
        aria-label="search"
        @click.prevent="handleSearch"
        v-if="showSearchButton"
      />
    </div>
  </div>
</template>
