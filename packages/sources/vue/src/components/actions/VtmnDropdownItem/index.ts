import { App as Application } from 'vue';
import VtmnDropdownItem from './VtmnDropdownItem.vue';

VtmnDropdownItem.install = (Vue: Application) => {
  Vue.component(VtmnDropdownItem.name, VtmnDropdownItem);
};

export default VtmnDropdownItem;
