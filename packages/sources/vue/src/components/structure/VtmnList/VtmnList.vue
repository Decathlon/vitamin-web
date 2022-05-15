<script lang="ts">
import '@vtmn/css-list/dist/index-with-vars.css';
import { defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnList',
});
</script>

<template>
  <ul class="vtmn-list" role="listbox" v-bind="$attrs">
    <slot />
  </ul>
</template>
