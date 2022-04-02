import { App as Application } from 'vue';
import VtmnPopover from './VtmnPopover.vue';

VtmnPopover.install = (Vue: Application) => {
  Vue.component(VtmnPopover.name, VtmnPopover);
};

export default VtmnPopover;
