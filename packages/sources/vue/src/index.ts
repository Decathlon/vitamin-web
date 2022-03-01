import { App as Application, Plugin } from 'vue';
import '@vtmn/css-design-tokens';
import * as components from './components/index';

function install(Vue: Application) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component]);
  }
}

export default install;

// GUIDELINES

// Iconography
export { default as VtmnIcon } from './guidelines/iconography/VtmnIcon';

// COMPONENTS

// Actions
export { default as VtmnButton } from './components/actions/VtmnButton';
export { default as VtmnLink } from './components/actions/VtmnLink';

// Forms
export { default as VtmnSelect } from './components/forms/VtmnSelect';
export { default as VtmnTextInput } from './components/forms/VtmnTextInput';

// Indicators
export { default as VtmnLoader } from './components/indicators/VtmnLoader';

// Navigation

// Overlays

// Selection controls
export { default as VtmnCheckbox } from './components/selection-controls/VtmnCheckbox';
export { default as VtmnRadioButton } from './components/selection-controls/VtmnRadioButton';
export { default as VtmnToggle } from './components/selection-controls/VtmnToggle';

// Structure
