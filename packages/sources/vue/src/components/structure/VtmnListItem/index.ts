import { App as Application } from 'vue';
import VtmnListItem from './VtmnListItem.vue';

VtmnListItem.install = (Vue: Application) => {
  Vue.component(VtmnListItem.name, VtmnListItem);
};

export default VtmnListItem;
