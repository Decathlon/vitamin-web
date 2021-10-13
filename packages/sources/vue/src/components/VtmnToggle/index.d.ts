import { App as Application } from 'vue';
import VtmnToggle from './VtmnToggle.vue';
declare const Plugin: {
    install(vue: Application): void;
};
export default Plugin;
export { VtmnToggle };
