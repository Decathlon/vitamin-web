<script lang="ts">
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon';
import '@vtmn/css-rating/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnRatingSize } from './types';
import { computeRatingFill } from './utils';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnRating',
  components: { VtmnIcon },
  inheritAttrs: false,
  props: {
    name: {
      type: String as PropType<string>,
    },
    emphasis: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<VtmnRatingSize>,
      default: 'medium',
      validator: (val: VtmnRatingSize) => ['small', 'medium'].includes(val),
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    compact: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: Number as PropType<number>,
      default: 0,
    },
    showValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    comments: {
      type: Number as PropType<number>,
      default: undefined,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      computeRatingFill,
      styleObject: {
        color: 'inherit',
        fontSize: 'none',
      },
      classes: computed(() => ({
        'vtmn-rating': true,
        [`vtmn-rating_size--${props.size}`]: props.size,
        'vtmn-rating_variant--brand': props.emphasis,
      })),
    };
  },
});
</script>

<template>
  <div :class="classes" :aria-disabled="disabled" v-bind="$attrs">
    <div
      v-if="!readonly"
      class="vtmn-rating--interactive"
      aria-label="Rate this"
      role="radiogroup"
    >
      <template v-for="i in 5" :key="i">
        <input
          type="radio"
          :group="value"
          :name="name"
          :value="i"
          :id="`${name}-${i}`"
          :aria-label="`${i} star out of 5`"
          :disabled="disabled"
        />
        <label :for="`${name}-${i}`" />
      </template>
    </div>
    <template v-else-if="!compact">
      <template v-for="i in 5" :key="i">
        <VtmnIcon
          :value="computeRatingFill(i, value)"
          :style="styleObject"
          role="presentation"
        />
      </template>
      <span
        v-if="showValue"
        class="vtmn-rating_comment--primary"
        aria-label="rate"
      >
        {{ value }}/5
      </span>
      <span
        v-if="comments"
        class="vtmn-rating_comment--secondary"
        aria-label="number of ratings"
      >
        {{ comments }}
      </span>
    </template>
    <template v-else>
      <VtmnIcon
        :value="
          value <= 2 ? 'star-line' : value < 4 ? 'star-half-fill' : 'star-fill'
        "
        :style="styleObject"
        role="presentation"
      />
    </template>
  </div>
</template>
