import { App as Application } from 'vue';
import VtmnQuantity from './VtmnQuantity.vue';

VtmnQuantity.install = (Vue: Application) => {
  Vue.component(VtmnQuantity.name, VtmnQuantity);
};

export default VtmnQuantity;
