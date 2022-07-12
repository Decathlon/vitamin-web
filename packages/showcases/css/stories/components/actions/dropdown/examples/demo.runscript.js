window.addEventListener('DOMContentLoaded', () => {
  let firstItem = document.querySelector('#dropdown-demo-opt-1');
  let lastItem = document.querySelector('#dropdown-demo-opt-6');

  let groupItem = document.querySelector('#dropdown-items');

  let firstFocusTrap = document.querySelector('#block-focus-trap-start');
  let lastFocusTrap = document.querySelector('#block-focus-trap-end');

  groupItem.addEventListener('focus', () => {
    firstItem.focus();
  });

  groupItem.addEventListener('focusout', () => {
    firstFocusTrap.setAttribute('tabindex', '-1');
  });

  groupItem.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelector('#dropdown-details').open = false;
      document.querySelector('#dropdown-details > summary').focus();
    }
  });

  firstItem.addEventListener('focus', () => {
    firstFocusTrap.setAttribute('tabindex', '0');
  });

  firstFocusTrap.addEventListener('focus', () => {
    lastItem.focus();
  });

  lastFocusTrap.addEventListener('focus', () => {
    firstItem.focus();
  });
});
