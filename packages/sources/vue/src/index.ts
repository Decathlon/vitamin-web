/* eslint-disable */
import { App as Application, Plugin } from 'vue';
import * as components from './components/index';

function install(Vue: Application) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component]);
  }
}

export default install;

export { default as VtmnButton } from './components/VtmnButton';
export { default as VtmnCheckbox } from './components/VtmnCheckbox';
export { default as VtmnLink } from './components/VtmnLink';
export { default as VtmnRadioButton } from './components/VtmnRadioButton';
export { default as VtmnTextInput } from './components/VtmnTextInput';
export { default as VtmnToggle } from './components/VtmnToggle';
