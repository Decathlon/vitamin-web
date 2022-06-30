import '@vtmn/css-design-tokens';
import { App as Application } from 'vue';
import * as components from './components/index';

function install(Vue: Application) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component]);
  }
}

export default install;

// Actions
export { default as VtmnButton } from './components/actions/VtmnButton';
export { default as VtmnDropdown } from './components/actions/VtmnDropdown';
export { default as VtmnDropdownItem } from './components/actions/VtmnDropdownItem';
export { default as VtmnLink } from './components/actions/VtmnLink';
// Forms
export { default as VtmnSelect } from './components/forms/VtmnSelect';
export { default as VtmnTextInput } from './components/forms/VtmnTextInput';
// Indicators
export { default as VtmnBadge } from './components/indicators/VtmnBadge';
export { default as VtmnLoader } from './components/indicators/VtmnLoader';
export { default as VtmnPrice } from './components/indicators/VtmnPrice';
export { default as VtmnProgressbar } from './components/indicators/VtmnProgressbar';
export { default as VtmnRating } from './components/indicators/VtmnRating';
export { default as VtmnTag } from './components/indicators/VtmnTag';
// Navigation
export { default as VtmnBreadcrumb } from './components/navigation/VtmnBreadcrumb';
export { default as VtmnBreadcrumbItem } from './components/navigation/VtmnBreadcrumbItem';
export { default as VtmnNavbar } from './components/navigation/VtmnNavbar';
export { default as VtmnSearch } from './components/navigation/VtmnSearch';
export { default as VtmnTabs } from './components/navigation/VtmnTabs';
export { default as VtmnTabsItem } from './components/navigation/VtmnTabsItem';

// Overlays
export { default as VtmnAlert } from './components/overlays/VtmnAlert';
export { default as VtmnModal } from './components/overlays/VtmnModal';
export { default as VtmnPopover } from './components/overlays/VtmnPopover';
export { default as VtmnSnackbar } from './components/overlays/VtmnSnackbar';
export { default as VtmnToast } from './components/overlays/VtmnToast';
export { default as VtmnTooltip } from './components/overlays/VtmnTooltip';
// Selection controls
export { default as VtmnCheckbox } from './components/selection-controls/VtmnCheckbox';
export { default as VtmnChip } from './components/selection-controls/VtmnChip';
export { default as VtmnQuantity } from './components/selection-controls/VtmnQuantity';
export { default as VtmnRadioButton } from './components/selection-controls/VtmnRadioButton';
export { default as VtmnToggle } from './components/selection-controls/VtmnToggle';
// Structure
export { default as VtmnAccordion } from './components/structure/VtmnAccordion';
export { default as VtmnCard } from './components/structure/VtmnCard';
export { default as VtmnDivider } from './components/structure/VtmnDivider';
export { default as VtmnList } from './components/structure/VtmnList';
export { default as VtmnListItem } from './components/structure/VtmnListItem';
export { default as VtmnSkeleton } from './components/structure/VtmnSkeleton';
export { default as VtmnIcon } from './guidelines/iconography/VtmnIcon';
