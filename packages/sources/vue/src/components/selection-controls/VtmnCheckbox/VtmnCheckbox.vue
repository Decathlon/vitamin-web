<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnCheckbox',
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array] as PropType<
        string | number | boolean | []
      >,
      default: '',
    },
    labelText: {
      type: String as PropType<string>,
      default: null,
    },
    identifier: {
      type: String as PropType<string>,
      default: null,
    },
    checked: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: String as PropType<string>,
      default: null,
    },
    name: {
      type: String as PropType<string>,
      default: null,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    standalone: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    props = reactive(props);

    const handleChange = (event: Event) => {
      if (props.standalone) {
        if (event && event.target) {
          return emit(
            'update:modelValue',
            (event.target as HTMLInputElement).checked,
          );
        }
      }

      return emit('update:modelValue', props.value);
    };

    return {
      handleChange,
    };
  },
});
</script>

<template>
  <input
    class="vtmn-checkbox"
    type="checkbox"
    :checked="checked"
    :id="identifier"
    :name="name"
    :disabled="disabled"
    :value="value"
    v-bind="$attrs"
    @change="handleChange"
  />
  <label :for="identifier">{{ labelText }}</label>
</template>
