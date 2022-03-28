import { App as Application } from 'vue';
import VtmnTag from './VtmnTag.vue';

VtmnTag.install = (Vue: Application) => {
  Vue.component(VtmnTag.name, VtmnTag);
};

export default VtmnTag;
