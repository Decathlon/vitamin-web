import { App as Application } from 'vue';
import VtmnBadge from './VtmnBadge.vue';

import { registerComponent } from '../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnBadge);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnBadge };
