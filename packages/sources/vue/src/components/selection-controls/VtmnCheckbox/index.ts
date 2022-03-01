import { App as Application } from 'vue';
import VtmnCheckbox from './VtmnCheckbox.vue';

VtmnCheckbox.install = (Vue: Application) => {
  Vue.component(VtmnCheckbox.name, VtmnCheckbox);
};

export default VtmnCheckbox;
