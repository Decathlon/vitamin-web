import { App as Application } from 'vue';
import VtmnLink from './VtmnLink.vue';

import { registerComponent } from '../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnLink);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnLink };
