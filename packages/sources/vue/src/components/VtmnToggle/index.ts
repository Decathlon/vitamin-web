import { App as Application } from 'vue';
import VtmnToggle from './VtmnToggle.vue';

import { registerComponent } from '../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnToggle);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnToggle };
