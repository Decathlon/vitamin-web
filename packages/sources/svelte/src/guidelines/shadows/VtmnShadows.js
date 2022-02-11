import { removeClasses, addClasses } from '../../utils/htmlNodes';

const CLASS_PREFIX = 'vtmn-shadow-';

function formatShadowClass(index) {
  return `${CLASS_PREFIX}${index}00`;
}

export default (node, value) => {
  if (value) {
    addClasses(node, [formatShadowClass(value)]);
  }
  return {
    update: (newValue) => {
      removeClasses(
        node,
        Array.from(node.classList).filter((x) => x.startsWith(CLASS_PREFIX)),
      );
      addClasses(node, [formatShadowClass(newValue)]);
    },
  };
};
