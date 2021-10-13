import { App as Application } from 'vue';
import VtmnCheckbox from './VtmnCheckbox.vue';
declare const Plugin: {
    install(vue: Application): void;
};
export default Plugin;
export { VtmnCheckbox };
