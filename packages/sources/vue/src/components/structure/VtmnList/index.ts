import { App as Application } from 'vue';
import VtmnList from './VtmnList.vue';

VtmnList.install = (Vue: Application) => {
  Vue.component(VtmnList.name, VtmnList);
};

export default VtmnList;
