import { App as Application } from 'vue';
import VtmnCheckbox from './VtmnCheckbox.vue';

import { registerComponent } from '../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnCheckbox);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnCheckbox };
