import { App as Application } from 'vue';
import VtmnChip from './VtmnChip.vue';

VtmnChip.install = (Vue: Application) => {
  Vue.component(VtmnChip.name, VtmnChip);
};

export default VtmnChip;
