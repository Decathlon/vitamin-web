import { App as Application } from 'vue';
import VtmnSkeleton from './VtmnSkeleton.vue';

VtmnSkeleton.install = (Vue: Application) => {
  Vue.component(VtmnSkeleton.name, VtmnSkeleton);
};

export default VtmnSkeleton;
