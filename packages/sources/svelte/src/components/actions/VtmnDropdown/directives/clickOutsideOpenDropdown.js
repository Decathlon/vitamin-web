/** Dispatch event on click outside of node */
export function clickOutsideOpenDropdown(node) {
  const handleClick = (event) => {
    if (
      node &&
      !node.contains(event.target) &&
      !event.defaultPrevented &&
      node.hasAttribute('open')
    ) {
      node.dispatchEvent(new CustomEvent('clickOutside', node));
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
}
