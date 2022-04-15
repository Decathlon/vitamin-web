import { App as Application } from 'vue';
import VtmnToast from './VtmnToast.vue';

VtmnToast.install = (Vue: Application) => {
  Vue.component(VtmnToast.name, VtmnToast);
};

export default VtmnToast;
