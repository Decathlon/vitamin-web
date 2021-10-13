import { App as Application } from 'vue';
import VtmnButton from './VtmnButton.vue';
declare const Plugin: {
    install(vue: Application): void;
};
export default Plugin;
export { VtmnButton };
