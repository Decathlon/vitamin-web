<script lang="ts">
import '@vtmn/css-list/dist/index-with-vars.css';
import { defineComponent, reactive, computed, PropType } from 'vue';
import { VtmnListItemSize } from './types';
import { computeRel } from '@/utils/link';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnListItem',
  methods: { computeRel },
  props: {
    size: {
      type: String as PropType<VtmnListItemSize>,
      default: 'medium',
      validator: (val: VtmnListItemSize) => ['small', 'medium'].includes(val),
    },
    divider: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    href: {
      type: String as PropType<string>,
    },
    rel: {
      type: String as PropType<string>,
    },
    target: {
      type: String as PropType<string>,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`vtmn-list_item-size--${props.size}`]: true,
        ['vtmn-list_item--without-divider']: !props.divider,
      })),
    };
  },
});
</script>

<template>
  <li
    :class="classes"
    role="option"
    tabindex="0"
    :aria-disabled="disabled"
    v-bind="$attrs"
  >
    <template v-if="href">
      <a
        class="vtmn-list__link"
        :href="href"
        :target="target"
        :rel="computeRel(target, rel)"
        :aria-disabled="disabled"
      >
        <div v-if="$slots['start-visual']" class="vtmn-list_start-visual">
          <slot name="start-visual" />
        </div>

        <div v-if="$slots['text']" class="vtmn-list_text">
          <slot name="text" />
          <template v-if="$slots['subtext']">
            <slot name="subtext" />
          </template>
        </div>
      </a>
    </template>
    <template v-else>
      <div v-if="$slots['start-visual']" class="vtmn-list_start-visual">
        <slot name="start-visual" />
      </div>

      <div v-if="$slots['text']" class="vtmn-list_text">
        <slot name="text" />
        <template v-if="$slots['subtext']">
          <slot name="subtext" />
        </template>
      </div>
    </template>

    <div v-if="$slots['end-action']" class="vtmn-list_end-action">
      <slot name="end-action" />
    </div>
  </li>
</template>
