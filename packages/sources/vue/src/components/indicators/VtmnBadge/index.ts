import { App as Application } from 'vue';
import VtmnBadge from './VtmnBadge.vue';

VtmnBadge.install = (Vue: Application) => {
  Vue.component(VtmnBadge.name, VtmnBadge);
};

export default VtmnBadge;
