import { App as Application } from 'vue';
import VtmnProgressbar from './VtmnProgressbar.vue';

VtmnProgressbar.install = (Vue: Application) => {
  Vue.component(VtmnProgressbar.name, VtmnProgressbar);
};

export default VtmnProgressbar;
