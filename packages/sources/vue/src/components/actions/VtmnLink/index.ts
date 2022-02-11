import { App as Application } from 'vue';
import VtmnLink from './VtmnLink.vue';

VtmnLink.install = (Vue: Application) => {
  Vue.component(VtmnLink.name, VtmnLink);
};

export default VtmnLink;
