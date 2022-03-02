import { App as Application } from 'vue';
import VtmnLoader from './VtmnLoader.vue';

VtmnLoader.install = (Vue: Application) => {
  Vue.component(VtmnLoader.name, VtmnLoader);
};

export default VtmnLoader;
