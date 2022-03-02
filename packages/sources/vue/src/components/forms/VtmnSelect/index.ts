import { App as Application } from 'vue';
import VtmnSelect from './VtmnSelect.vue';

VtmnSelect.install = (Vue: Application) => {
  Vue.component(VtmnSelect.name, VtmnSelect);
};

export default VtmnSelect;
