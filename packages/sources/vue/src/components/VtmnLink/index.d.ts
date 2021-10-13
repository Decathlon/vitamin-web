import { App as Application } from 'vue';
import VtmnLink from './VtmnLink.vue';
declare const Plugin: {
    install(vue: Application): void;
};
export default Plugin;
export { VtmnLink };
