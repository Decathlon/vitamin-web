window.addEventListener('DOMContentLoaded', () => {
  let firstItem = document.querySelector('#dropdown-demo-opt-1');
  let lastItem = document.querySelector('#dropdown-demo-opt-6');

  console.log('firstItem', firstItem);
  console.log('lastItem', lastItem);

  let groupItem = document.querySelector('#dropdown-items');

  console.log('groupItem', groupItem);

  let firstFocusTrap = document.querySelector('#block-focus-trap-start');
  let lastFocusTrap = document.querySelector('#block-focus-trap-end');

  console.log('firstFocusTrap', firstFocusTrap);
  console.log('lastFocusTrap', lastFocusTrap);

  groupItem.addEventListener('focus', () => {
    console.log('groupItem focus');
    firstItem.focus();
  });

  groupItem.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      console.log('groupItem keydown Escape');
      document.querySelector('#dropdown-details').open = false;
      document.querySelector('#dropdown-details > summary').focus();
    }
  });

  firstFocusTrap.addEventListener('focus', () => {
    console.log('firstFocusTrap focused');
    lastItem.focus();
  });

  lastFocusTrap.addEventListener('focus', () => {
    console.log('lastFocusTrap focused');
    firstItem.focus();
  });
});
