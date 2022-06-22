window.addEventListener('DOMContentLoaded', () => {
  let firstItem = document.querySelector('#dropdown-demo-opt-1');
  let lastItem = document.querySelector('#dropdown-demo-opt-6');

  let groupItem = document.querySelector('#dropdown-items');

  let firstFocusTrap = document.querySelector('#block-focus-trap-start');
  let lastFocusTrap = document.querySelector('#block-focus-trap-end');

  groupItem.addEventListener('focus', () => {
    firstItem.focus();
  });

  groupItem.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelector('#dropdown-details').open = false;
      document.querySelector('#dropdown-details > summary').focus();
    }
  });

  firstFocusTrap.addEventListener('focus', () => {
    lastItem.focus();
  });

  lastFocusTrap.addEventListener('focus', () => {
    firstItem.focus();
  });
});
