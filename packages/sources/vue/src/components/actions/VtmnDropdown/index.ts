import { App as Application } from 'vue';
import VtmnDropdown from './VtmnDropdown.vue';

VtmnDropdown.install = (Vue: Application) => {
  Vue.component(VtmnDropdown.name, VtmnDropdown);
};

export default VtmnDropdown;
