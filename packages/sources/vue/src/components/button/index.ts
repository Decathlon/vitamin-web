import { App as Application } from 'vue';
import VtmnButton from './VtmnButton.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnButton);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnButton };
