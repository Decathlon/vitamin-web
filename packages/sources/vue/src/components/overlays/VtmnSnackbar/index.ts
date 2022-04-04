import { App as Application } from 'vue';
import VtmnSnackbar from './VtmnSnackbar.vue';

VtmnSnackbar.install = (Vue: Application) => {
  Vue.component(VtmnSnackbar.name, VtmnSnackbar);
};

export default VtmnSnackbar;
