<script lang="ts">
import '@vtmn/css-navbar/dist/index-with-vars.css';
import { defineComponent, PropType } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnNavbar',
  components: {},
  props: {
    logoHref: {
      type: String as PropType<string>,
      default: '#',
    },
  },
});
</script>

<template>
  <nav class="vtmn-navbar" aria-label="navbar" v-bind="$attrs">
    <div v-if="$slots['left-nav']" class="vtmn-navbar_left-navigation">
      <slot name="left-nav" />
    </div>

    <a v-if="$slots['logo']" class="vtmn-navbar_logo" :href="logoHref">
      <slot name="logo" />
    </a>

    <div v-if="$slots['middle-area']" class="vtmn-navbar_middle-area">
      <slot name="middle-area" />
    </div>

    <div v-if="$slots['right-nav']" class="vtmn-navbar_right-navigation">
      <slot name="right-nav" />
    </div>
  </nav>
</template>
