import { App as Application } from 'vue';
import VtmnRating from './VtmnRating.vue';

VtmnRating.install = (Vue: Application) => {
  Vue.component(VtmnRating.name, VtmnRating);
};

export default VtmnRating;
