<script lang="ts">
import '@vtmn/css-chip/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { VtmnChipVariant, VtmnChipSize } from './types';
import { VtmnBadge, VtmnButton } from '../../index';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnChip',
  inheritAttrs: false,
  components: { VtmnBadge, VtmnButton, VtmnIcon },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    variant: {
      type: String as PropType<VtmnChipVariant>,
      default: 'single-choice',
      validator: (val: VtmnChipVariant) =>
        ['single-choice', 'input', 'filter', 'action'].includes(val),
    },
    size: {
      type: String as PropType<VtmnChipSize>,
      default: 'medium',
      validator: (val: VtmnChipSize) => ['small', 'medium'].includes(val),
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    selected: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
    },
    badgeValue: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  emits: ['update:modelValue', 'cancel'],
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

    const handleCancel = () => {
      return emit('cancel');
    };

    return {
      styleObject: {
        color: 'inherit',
        fontSize: 'inherit',
      },
      classes: computed(() => ({
        'vtmn-chip': true,
        [`vtmn-chip_variant--${props.variant}`]: props.variant,
        [`vtmn-chip_size--${props.size}`]: props.size,
        ['vtmn-chip--selected']: props.selected && props.variant !== 'action',
        ['vtmn-chip--disabled']: props.disabled,
      })),
      handleChange,
      handleCancel,
    };
  },
});
</script>

<template>
  <div
    :class="classes"
    :value="modelValue"
    role="button"
    :aria-disabled="disabled"
    :aria-pressed="selected && variant !== 'action'"
  >
    <VtmnIcon
      v-if="(variant === 'input' || variant === 'action') && icon"
      :value="icon"
      :style="styleObject"
      aria-hidden="true"
    />
    <slot />
    <VtmnButton
      v-if="variant === 'input' && selected"
      :variant="'ghost-reversed'"
      :iconAlone="'close-line'"
      :size="size"
      :disabled="disabled"
      @click.prevent="handleCancel"
      aria-label="Unselect the selection"
    />
    <VtmnBadge
      v-if="variant === 'filter' && badgeValue > 0"
      :value="badgeValue"
    />
  </div>
</template>
