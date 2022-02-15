import { App as Application } from 'vue';
import VtmnButton from './VtmnButton.vue';

VtmnButton.install = (Vue: Application) => {
  Vue.component(VtmnButton.name, VtmnButton);
};

export default VtmnButton;
