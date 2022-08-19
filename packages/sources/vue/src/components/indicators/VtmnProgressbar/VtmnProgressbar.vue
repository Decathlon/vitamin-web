<script lang="ts">
import '@vtmn/css-progressbar/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
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
  setup(props) {
    props = reactive(props);
    const progress = Math.min(Math.max(props.value, 0), 100);
    const circlePerimeter = `${Math.round(
      2 * Math.PI * VtmnProgressbarMappedSize[props.size],
    )}px`;
    return {
      VtmnProgressbarMappedSize,
      progress,
      circlePerimeter,
      classes: computed(() => ({
        'vtmn-progressbar_container': true,
        [`vtmn-progressbar_variant--${props.variant}`]: true,
        [`vtmn-progressbar--${props.status}`]: true,
        [`vtmn-progressbar_size--${props.size}`]:
          props.variant == 'linear' || props.size == 'small',
      })),
    };
  },
});
</script>

<template>
  <div
    :class="classes"
    role="progressbar"
    :aria-valuemin="status === 'determinate' ? 0 : undefined"
    :aria-valuemax="status === 'determinate' ? 100 : undefined"
    :aria-valuenow="status === 'determinate' ? value : undefined"
    :aria-labelledby="labelId ? labelId : undefined"
    v-bind="$attrs"
  >
    <!-- Linear Progressbar -->
    <div
      v-if="variant === 'linear' && status === 'determinate'"
      class="vtmn-progressbar_label"
    >
      <span :id="labelId ? labelId : undefined">
        {{ loadingText }}
      </span>
      <span aria-live="assertive"> {{ progress }}% </span>
    </div>

    <span
      v-if="variant === 'linear' && status === 'indeterminate'"
      :id="labelId ? labelId : undefined"
      class="vtmn-sr-only"
      >{{ loadingText }}</span
    >

    <svg v-if="variant === 'linear'">
      <line
        class="vtmn-progressbar_indicator"
        x1="0"
        x2="100%"
        y1="50%"
        y2="50%"
        :style="
          status === 'determinate'
            ? { transform: `translateX(${progress - 100}%)` }
            : {}
        "
      />
    </svg>

    <!-- Circular Progressbar -->
    <span
      v-if="variant === 'circular' && status === 'determinate'"
      class="vtmn-progressbar_label"
      aria-live="assertive"
    >
      {{ progress }}%
    </span>

    <img
      v-if="variant === 'circular' && imageSrc !== undefined"
      class="vtmn-progressbar_image"
      :src="imageSrc"
      :alt="imageAlt"
    />

    <span
      v-if="variant === 'circular' && status === 'indeterminate'"
      :id="labelId ? labelId : undefined"
      class="vtmn-sr-only"
    >
      {{ loadingText }}
    </span>

    <svg v-if="variant === 'circular'">
      <circle
        class="vtmn-progressbar_track"
        cx="50%"
        cy="50%"
        :r="VtmnProgressbarMappedSize[size]"
      />
      <circle
        class="vtmn-progressbar_indicator"
        :strokeDashoffset="`calc(${circlePerimeter} - ${circlePerimeter} * ${progress} / 100)`"
        cx="50%"
        cy="50%"
        :r="VtmnProgressbarMappedSize[size]"
      />
    </svg>
  </div>
</template>
