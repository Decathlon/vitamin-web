<script lang="ts">
import '@vtmn/css-card/dist/index-with-vars.css';
import { reactive, computed, defineComponent, PropType } from 'vue';
import { VtmnCardVariant } from './types';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnCard',
  inheritAttrs: false,
  props: {
    title: {
      type: String as PropType<string>,
      default: 'Card title',
    },
    variant: {
      type: String as PropType<VtmnCardVariant>,
      default: 'top-image',
      validator: (val: VtmnCardVariant) =>
        ['top-image', 'side-image', 'full-image'].includes(val),
    },
    fullImage: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    contentOpaque: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    headingLevel: {
      type: Number as PropType<number>,
      default: 2,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      componentClasses: computed(() => ({
        'vtmn-card': true,
        [`vtmn-card_variant--${props.variant}`]: props.variant,
      })),

      componentImageClasses: computed(() => ({
        'vtmn-card_image': true,
        'vtmn-card_image--full':
          props.variant === 'top-image' && props.fullImage,
      })),

      componentContentClasses: computed(() => ({
        'vtmn-card_content': true,
        'vtmn-card_content--opaque':
          props.variant === 'full-image' && props.contentOpaque,
      })),

      Heading: computed(() => {
        return props.headingLevel >= 0 && props.headingLevel <= 6
          ? `h${props.headingLevel}`
          : 'h2';
      }),
    };
  },
});
</script>

<template>
  <div :class="componentClasses" v-bind="$attrs">
    <div v-if="$slots['img']" :class="componentImageClasses">
      <slot name="img" />
    </div>
    <div :class="componentContentClasses">
      <component
        :is="Heading"
        v-if="$props.title"
        class="vtmn-card_content--title"
      >
        {{ $props.title }}
      </component>

      <template v-if="$slots['content']">
        <span class="vtmn-card_content--body">
          <slot name="content" />
        </span>
      </template>

      <template v-if="$slots['actions']">
        <slot name="actions" />
      </template>
    </div>
  </div>
</template>
