<script lang="ts">
import '@vtmn/css-text-input/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { reactive, computed, defineComponent, PropType } from 'vue';
import VtmnIcon from '@/guidelines/iconography/VtmnIcon/VtmnIcon.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnTextInput',
  components: { VtmnIcon },
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: '',
    },
    identifier: {
      type: String as PropType<string>,
      required: true,
    },
    labelText: {
      type: String as PropType<string>,
      default: null,
    },
    placeholder: {
      type: String as PropType<string>,
      default: null,
    },
    helperText: {
      type: String as PropType<string>,
      default: null,
    },
    multiline: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    valid: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    error: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
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
    return {
      classes: computed(() => ({
        'vtmn-text-input': true,
        'vtmn-text-input--error': props.error,
        'vtmn-text-input--valid': props.valid,
      })),
      helperClasses: computed(() => ({
        'vtmn-text-input_helper-text': true,
        'vtmn-text-input_helper-text--error': props.error,
      })),
      handleChange,
    };
  },
});
</script>

<template>
  <label :v-if="labelText" class="vtmn-text-input_label" :for="identifier">
    {{ labelText }}
  </label>
  <textarea
    v-if="multiline"
    :class="classes"
    :id="identifier"
    :placeholder="placeholder"
    :disabled="disabled"
    :aria-invalid="error && !disabled"
    :aria-describedby="helperText ? `${identifier}-helper-text` : undefined"
    v-bind="$attrs"
    @input="handleChange"
  ></textarea>
  <div v-else class="vtmn-text-input_container">
    <input
      type="text"
      :class="classes"
      :id="identifier"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="error && !disabled"
      :aria-describedby="helperText ? `${identifier}-helper-text` : undefined"
      v-bind="$attrs"
      @input="handleChange"
    />
    <VtmnIcon v-if="icon" :value="icon" />
  </div>
  <p
    :v-if="helperText"
    :id="`${identifier}-helper-text`"
    :class="helperClasses"
  >
    {{ helperText }}
  </p>
</template>
