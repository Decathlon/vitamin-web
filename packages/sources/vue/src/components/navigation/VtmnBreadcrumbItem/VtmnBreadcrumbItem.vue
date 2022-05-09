<script lang="ts">
import '@vtmn/css-breadcrumb/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { defineComponent, PropType, reactive } from 'vue';
import VtmnIcon from '../../../guidelines/iconography/VtmnIcon/VtmnIcon.vue';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnBreadcrumbItem',
  components: { VtmnIcon },
  props: {
    icon: {
      type: String as PropType<VitamixId>,
      default: null,
    },
    href: {
      type: String as PropType<string>,
      default: '#',
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      styleObject: {
        color: 'inherit',
        fontSize: 'inherit',
      },
    };
  },
});
</script>

<template>
  <li>
    <VtmnIcon
      v-if="icon"
      :value="icon"
      :style="styleObject"
      aria-hidden="true"
    />
    <a v-if="href" :href="href" v-bind="$attrs">
      <slot />
    </a>
    <slot v-else />
  </li>
</template>
