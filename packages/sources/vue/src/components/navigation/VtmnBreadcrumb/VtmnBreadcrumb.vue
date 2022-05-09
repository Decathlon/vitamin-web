<script lang="ts">
import '@vtmn/css-breadcrumb/dist/index-with-vars.css';
import { defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnBreadcrumb',
});
</script>

<template>
  <nav class="vtmn-breadcrumb" v-bind="$attrs">
    <ol>
      <slot />
    </ol>
  </nav>
</template>
