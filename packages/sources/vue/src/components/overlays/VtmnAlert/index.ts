import { App as Application } from 'vue';
import VtmnAlert from './VtmnAlert.vue';

VtmnAlert.install = (Vue: Application) => {
  Vue.component(VtmnAlert.name, VtmnAlert);
};

export default VtmnAlert;
