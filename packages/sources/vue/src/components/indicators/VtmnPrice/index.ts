import { App as Application } from 'vue';
import VtmnPrice from './VtmnPrice.vue';

VtmnPrice.install = (Vue: Application) => {
  Vue.component(VtmnPrice.name, VtmnPrice);
};

export default VtmnPrice;
