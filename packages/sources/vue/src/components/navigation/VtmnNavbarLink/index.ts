import { App as Application } from 'vue';
import VtmnNavbarLink from './VtmnNavbarLink.vue';

VtmnNavbarLink.install = (Vue: Application) => {
  Vue.component(VtmnNavbarLink.name, VtmnNavbarLink);
};

export default VtmnNavbarLink;
