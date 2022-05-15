import { App as Application } from 'vue';
import VtmnCard from './VtmnCard.vue';

VtmnCard.install = (Vue: Application) => {
  Vue.component(VtmnCard.name, VtmnCard);
};

export default VtmnCard;
