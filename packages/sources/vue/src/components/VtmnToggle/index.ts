import { App as Application } from 'vue';
import VtmnToggle from './VtmnToggle.vue';

VtmnToggle.install = (Vue: Application) => {
  Vue.component(VtmnToggle.name, VtmnToggle);
};

export default VtmnToggle;
