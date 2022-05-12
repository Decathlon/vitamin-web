import { App as Application } from 'vue';
import VtmnBreadcrumbItem from './VtmnBreadcrumbItem.vue';

VtmnBreadcrumbItem.install = (Vue: Application) => {
  Vue.component(VtmnBreadcrumbItem.name, VtmnBreadcrumbItem);
};

export default VtmnBreadcrumbItem;
