import { App as Application } from 'vue';
import VtmnNavbar from './VtmnNavbar.vue';

VtmnNavbar.install = (Vue: Application) => {
  Vue.component(VtmnNavbar.name, VtmnNavbar);
};

export default VtmnNavbar;
