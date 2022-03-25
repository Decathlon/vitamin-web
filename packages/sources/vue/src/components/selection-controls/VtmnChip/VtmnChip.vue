<script lang="ts">
import '@vtmn/css-toggle/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { VtmnBadge } from '../../index';
import { VtmnChipVariant, VtmnChipSize } from './types';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnChip',
  inheritAttrs: false,
  components: { VtmnIcon },
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
      type: Boolean as PropType<Boolean>,
      default: false,
    },
    selected: {
      type: Boolean as PropType<Boolean>,
      default: false,
    },
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
    },
    badgeValue: {
      type: Number as PropType<Number>,
      default: 0,
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
        'vtmn-chip': true,
        [`vtmn-chip_variant--${props.variant}`]: props.variant,
        [`vtmn-chip_size--${props.size}`]: props.size,
        ['vtmn-chip--selected']: props.selected && props.variant !== 'action',
        ['vtmn-chip--disabled']: props.disabled,
      })),
      handleChange,
    };
  },
});
</script>

<template>
  <div :class="classes">
    <span :v-if="displayLeftIcon" class="{`vtmx-${icon}`}" aria-hidden="true" />
    <slot />
    {#if displayInputButton} <VtmnButton variant="ghost-reversed"
    iconAlone="close-line" aria-label={$$restProps['aria-label']} {size}
    on:click={cancelClickHandler} {disabled} /> {/if} {#if displayFilterBadge}
    <VtmnBadge value="{badgeValue}" />
    {/if}
  </div>
</template>
