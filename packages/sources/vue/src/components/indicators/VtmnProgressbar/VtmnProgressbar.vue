<script lang="ts">
import '@vtmn/css-progressbar/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType, mergeProps } from 'vue';
import {
  VtmnProgressbarVariant,
  VtmnProgressbarSize,
  VtmnProgressbarStatus,
} from './types';

const VtmnProgressbarMappedSize: { [key in VtmnProgressbarSize]: number } = {
  small: 32,
  medium: 64,
  large: 128,
};

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnProgressbar',
  props: {
    variant: {
      type: String as PropType<VtmnProgressbarVariant>,
      default: 'linear',
      validator: (val: VtmnProgressbarVariant) =>
        ['linear', 'circular'].includes(val),
    },
    size: {
      type: String as PropType<VtmnProgressbarSize>,
      default: 'medium',
      validator: (val: VtmnProgressbarSize) =>
        ['small', 'medium', 'large'].includes(val),
    },
    status: {
      type: String as PropType<VtmnProgressbarStatus>,
      default: 'determinate',
      validator: (val: VtmnProgressbarStatus) =>
        ['determinate', 'indeterminate'].includes(val),
    },
    value: {
      type: Number as PropType<number>,
      default: 0,
    },
    imageSrc: {
      type: String as PropType<string>,
      default: undefined,
    },
    imageAlt: {
      type: String as PropType<string>,
      default: undefined,
    },
    loadingText: {
      type: String as PropType<string>,
      default: 'Loading',
    },
    labelId: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  setup(props, { attrs }) {
    props = reactive(props);
    const progress = Math.min(Math.max(props.value, 0), 100);
    const circlePerimeter = `${Math.round(
      2 * Math.PI * VtmnProgressbarMappedSize[props.size],
    )}px`;

    // Progressbar states
    const isLinear = props.variant === 'linear';
    const isCircular = props.variant === 'circular';
    const isDeterminate = props.status === 'determinate';
    const isIndeterminate = props.status === 'indeterminate';
    const isSmall = props.size === 'small';

    // Progressbar a11y props
    const ariaProps = {
      'aria-labelledby': props.labelId,
      ...(isDeterminate
        ? {
            'aria-valuenow': progress,
            'aria-valuemin': 0,
            'aria-valuemax': 100,
          }
        : {}),
    }
    return {
      VtmnProgressbarMappedSize,
      progress,
      circlePerimeter,
      isLinear,
      isCircular,
      isDeterminate,
      isIndeterminate,
      classes: computed(() => ({
        'vtmn-progressbar_container': true,
        [`vtmn-progressbar_variant--${props.variant}`]: true,
        [`vtmn-progressbar--${props.status}`]: true,
        // Only add size attribute when variant is linear or size is small in circular mode
        [`vtmn-progressbar_size--${props.size}`]: isLinear || isSmall,
      })),
      mergedAttrs: mergeProps(attrs, ariaProps)
    };
  },
});
</script>

<template>
  <div
    :class="classes"
    role="progressbar"
    v-bind="mergedAttrs"
  >
    <!-- Linear Progressbar -->
    <div
      v-if="isLinear && isDeterminate"
      class="vtmn-progressbar_label"
    >
      <span :id="labelId">
        {{ loadingText }}
      </span>
      <span aria-live="assertive"> {{ progress }}% </span>
    </div>

    <span
      v-if="isLinear && isIndeterminate"
      :id="labelId"
      class="vtmn-sr-only"
      >{{ loadingText }}</span
    >

    <svg v-if="isLinear">
      <line
        class="vtmn-progressbar_indicator"
        x1="0"
        x2="100%"
        y1="50%"
        y2="50%"
        :style="{
          '--vtmn-progressbar_progress-transform': isDeterminate
            ? `translateX(${progress - 100}%)`
            : 'unset'
        }"
      />
    </svg>

    <!-- Circular Progressbar -->
    <span
      v-if="isCircular && isDeterminate"
      class="vtmn-progressbar_label"
      aria-live="assertive"
    >
      {{ progress }}%
    </span>

    <img
      v-if="isCircular && imageSrc !== undefined"
      class="vtmn-progressbar_image"
      :src="imageSrc"
      :alt="imageAlt"
    />

    <span
      v-if="isCircular && isIndeterminate"
      :id="labelId"
      class="vtmn-sr-only"
    >
      {{ loadingText }}
    </span>

    <svg v-if="isCircular">
      <circle
        class="vtmn-progressbar_track"
        cx="50%"
        cy="50%"
        :r="VtmnProgressbarMappedSize[size]"
      />
      <circle
        class="vtmn-progressbar_indicator"
        :stroke-dashoffset="`calc(${circlePerimeter} - ${circlePerimeter} * ${progress} / 100)`"
        cx="50%"
        cy="50%"
        :r="VtmnProgressbarMappedSize[size]"
      />
    </svg>
  </div>
</template>
