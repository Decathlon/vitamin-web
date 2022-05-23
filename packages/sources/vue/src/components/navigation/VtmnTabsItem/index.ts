import { App as Application } from 'vue';
import VtmnTabsItem from './VtmnTabsItem.vue';

VtmnTabsItem.install = (Vue: Application) => {
  Vue.component(VtmnTabsItem.name, VtmnTabsItem);
};

export default VtmnTabsItem;
