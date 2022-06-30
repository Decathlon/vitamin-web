import { App as Application } from 'vue';
import VtmnTabs from './VtmnTabs.vue';

VtmnTabs.install = (Vue: Application) => {
  Vue.component(VtmnTabs.name, VtmnTabs);
};

export default VtmnTabs;
