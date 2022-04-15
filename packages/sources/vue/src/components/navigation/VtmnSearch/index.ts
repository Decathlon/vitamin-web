import { App as Application } from 'vue';
import VtmnSearch from './VtmnSearch.vue';

VtmnSearch.install = (Vue: Application) => {
  Vue.component(VtmnSearch.name, VtmnSearch);
};

export default VtmnSearch;
