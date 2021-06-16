import { App as Application } from 'vue';
import VtmnRadio from './VtmnRadio.vue';

import { registerComponent } from '../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnRadio);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnRadio };
