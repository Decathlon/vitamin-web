import { App as Application } from 'vue';
import VtmnModal from './VtmnModal.vue';

VtmnModal.install = (Vue: Application) => {
  Vue.component(VtmnModal.name, VtmnModal);
};

export default VtmnModal;
