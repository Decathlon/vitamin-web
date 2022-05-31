<script lang="ts">
import '@vtmn/css-dropdown/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { defineComponent, PropType, reactive } from 'vue';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';
import VtmnDivider from '../../structure/VtmnDivider/VtmnDivider.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnDropdownItem',
  components: { VtmnIcon, VtmnDivider },
  props: {
    checked: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    divider: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    props = reactive(props);

    const labelId = attrs['id'] ? String(attrs['id']) : undefined;

    const handleChange = (event: Event) => {
      if (event && event.target) {
        return emit(
          'update:modelValue',
          (event.target as HTMLInputElement).checked,
        );
      }
    };

    return {
      labelId,
      handleChange,
    };
  },
});
</script>

<template>
  <input
    type="checkbox"
    :checked="checked"
    @change="handleChange"
    v-bind="$attrs"
  />
  <label :for="labelId">
    <VtmnIcon v-if="icon" :value="icon" aria-hidden="true" />
    <slot />
  </label>
  <VtmnDivider v-if="divider" orientation="horizontal" role="separator" />
</template>
