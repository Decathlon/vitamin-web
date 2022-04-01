import { App as Application } from 'vue';
import VtmnAccordion from './VtmnAccordion.vue';

VtmnAccordion.install = (Vue: Application) => {
  Vue.component(VtmnAccordion.name, VtmnAccordion);
};

export default VtmnAccordion;
