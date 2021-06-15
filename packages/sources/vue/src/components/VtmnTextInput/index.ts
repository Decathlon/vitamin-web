import { App as Application } from 'vue';
import VtmnTextInput from './VtmnTextInput.vue';

import { registerComponent } from '../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnTextInput);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnTextInput };
