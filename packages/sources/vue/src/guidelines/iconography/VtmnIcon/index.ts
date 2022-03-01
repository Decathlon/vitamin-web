import { App as Application } from 'vue';
import VtmnIcon from './VtmnIcon.vue';

VtmnIcon.install = (Vue: Application) => {
  Vue.component(VtmnIcon.name, VtmnIcon);
};

export default VtmnIcon;
