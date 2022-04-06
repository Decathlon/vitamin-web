<script lang="ts">
import '@vtmn/css-quantity/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnQuantity',
  components: { VtmnButton },
  props: {
    modelValue: {
      type: Number as PropType<number>,
      default: false,
    },
    id: {
      type: String as PropType<string>,
      default: undefined,
    },
    label: {
      type: String as PropType<string>,
      default: undefined,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    min: {
      type: Number as PropType<number>,
      default: -Infinity,
    },
    max: {
      type: Number as PropType<number>,
      default: Infinity,
    },
    step: {
      type: Number as PropType<number>,
      default: 1,
    },
    error: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    props = reactive(props);
    const handleChange = (event: Event) => {
      if (event && event.target) {
        return emit(
          'update:modelValue',
          (event.target as HTMLInputElement).checked,
        );
      }
    };
    return {
      classes: computed(() => ({
        'vtmn-quantity': true,
      })),
      handleChange,
    };
  },
});
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <label :v-if="label" :aria-disabled="disabled" :for="id">{{ label }}</label>
    <div :aria-disabled="disabled" class="vtmn-quantity_content">
      <VtmnButton
        :disabled="disabled || modelValue <= min"
        variant="secondary"
        icon-alone="subtract-line"
        aria-label="substract"
      />
      <input
        type="number"
        :value="modelValue"
        :id="id"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        :aria-invalid="error ? true : undefined"
        :aria-describedby="error ? `quantity-helper-${id}` : undefined"
        @change="handleChange"
      />
      <VtmnButton
        :disabled="disabled || modelValue >= max"
        variant="secondary"
        icon-alone="add-line"
        aria-label="add"
      />
    </div>
    <p
      v-if="error"
      :id="`quantity-helper-${id}`"
      class="vtmn-quantity_error-text"
    >
      {{ error }}
    </p>
  </div>
</template>
