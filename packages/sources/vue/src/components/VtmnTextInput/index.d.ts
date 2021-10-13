import { App as Application } from 'vue';
import VtmnTextInput from './VtmnTextInput.vue';
declare const Plugin: {
    install(vue: Application): void;
};
export default Plugin;
export { VtmnTextInput };
