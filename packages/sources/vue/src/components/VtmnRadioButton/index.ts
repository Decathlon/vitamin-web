import { App as Application } from 'vue';
import VtmnRadioButton from './VtmnRadioButton.vue';

import { registerComponent } from '../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, VtmnRadioButton);
  },
};

// use(Plugin);

export default Plugin;

export { VtmnRadioButton };
