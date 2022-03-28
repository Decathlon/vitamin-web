import { App as Application } from 'vue';
import VtmnDivider from './VtmnDivider.vue';

VtmnDivider.install = (Vue: Application) => {
  Vue.component(VtmnDivider.name, VtmnDivider);
};

export default VtmnDivider;
