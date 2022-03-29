import { App as Application } from 'vue';
import VtmnTooltip from './VtmnTooltip.vue';

VtmnTooltip.install = (Vue: Application) => {
  Vue.component(VtmnTooltip.name, VtmnTooltip);
};

export default VtmnTooltip;
