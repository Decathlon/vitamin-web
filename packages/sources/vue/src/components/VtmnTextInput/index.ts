import { App as Application } from 'vue';
import VtmnTextInput from './VtmnTextInput.vue';

VtmnTextInput.install = (Vue: Application) => {
  Vue.component(VtmnTextInput.name, VtmnTextInput);
};

export default VtmnTextInput;
