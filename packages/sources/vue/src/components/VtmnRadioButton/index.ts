import { App as Application } from 'vue';
import VtmnRadioButton from './VtmnRadioButton.vue';

VtmnRadioButton.install = (Vue: Application) => {
  Vue.component(VtmnRadioButton.name, VtmnRadioButton);
};

export default VtmnRadioButton;
