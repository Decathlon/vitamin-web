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
      default: 0,
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
      type: String as PropType<string>,
      default: undefined,
    },
  },
  emits: ['update:modelValue'],
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

    const handleSubstract = () => {
      return emit('update:modelValue', props.modelValue - props.step);
    };

    const handleAdd = () => {
      return emit('update:modelValue', props.modelValue + props.step);
    };

    return {
      classes: computed(() => ({
        'vtmn-quantity': true,
      })),
      handleChange,
      handleSubstract,
      handleAdd,
    };
  },
});
</script>

<template>
  <div :class="classes" :aria-disabled="disabled" v-bind="$attrs">
    <label :v-if="label" :for="id">{{ label }}</label>
    <div :aria-disabled="disabled" class="vtmn-quantity_content">
      <VtmnButton
        :disabled="disabled || modelValue <= min"
        variant="secondary"
        icon-alone="subtract-line"
        aria-label="substract"
        @click="handleSubstract"
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
        @click="handleAdd"
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
