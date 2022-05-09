import { App as Application } from 'vue';
import VtmnBreadcrumb from './VtmnBreadcrumb.vue';

VtmnBreadcrumb.install = (Vue: Application) => {
  Vue.component(VtmnBreadcrumb.name, VtmnBreadcrumb);
};

export default VtmnBreadcrumb;
