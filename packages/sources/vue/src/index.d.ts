import { Plugin } from 'vue';
declare const install: Exclude<Plugin['install'], undefined>;
export default install;
export * from './components';
