<script lang="ts">
import '@vtmn/css-progressbar/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import {
  VtmnProgressbarVariant,
  VtmnProgressbarSize,
  VtmnProgressbarStatus,
} from './types';

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
  },
  setup(props) {
    props = reactive(props);

    return {
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
    aria-label="progress bar"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="value"
  >
    <!-- Linear Progressbar -->
    <span
      v-if="variant === 'linear' && status === 'determinate'"
      class="vtmn-progressbar_label"
      :data-value="Math.min(Math.max(value, 0), 100)"
    >
      {{ loadingText }}
    </span>

    <svg v-if="variant === 'linear'">
      <line
        class="vtmn-progressbar_indicator"
        :x1="0"
        :x2="
          status === 'determinate'
            ? `${Math.min(Math.max(value, 0), 100)}%`
            : '100%'
        "
        y1="50%"
        y2="50%"
      />
    </svg>

    <!-- Circular Progressbar -->
    <span
      v-if="variant === 'circular' && status === 'determinate'"
      class="vtmn-progressbar_label"
      :data-value="Math.min(Math.max(value, 0), 100)"
    />

    <img
      v-if="variant === 'circular' && imageSrc !== undefined"
      class="vtmn-progressbar_image"
      :src="imageSrc"
      :alt="imageAlt"
    />

    <svg v-if="variant === 'circular'">
      <circle
        class="vtmn-progressbar_track"
        cx="50%"
        cy="50%"
        :r="size === 'small' ? 32 : 64"
      />
      <circle
        class="vtmn-progressbar_indicator"
        :strokeDashoffset="
          size === 'small'
            ? `calc(200px - (200px * ${Math.min(
                Math.max(value, 0),
                100,
              )} / 100)`
            : `calc(400px - (400px * ${Math.min(
                Math.max(value, 0),
                100,
              )} ) / 100)`
        "
        cx="50%"
        cy="50%"
        :r="size === 'small' ? 32 : 64"
      />
    </svg>
  </div>
</template>
