window.addEventListener('DOMContentLoaded', () => {
  let navContainer = document.querySelector('#demo-tabs-nav');
  let tabListContainer = document.querySelector('#demo-tabs-tablist');

  let firstTab = document.querySelector('#tab-demo-1');
  let lastTab = document.querySelector('#tab-demo-1');

  let firstFocusTrap = document.querySelector('#block-focus-trap-start');
  let lastFocusTrap = document.querySelector('#block-focus-trap-end');

  tabListContainer.addEventListener('focus', () => {
    console.log('tabListContainer.focus');
    firstTab.focus();
  });

  tabListContainer.childNodes.forEach((tab) => {
    tab.childNodes.forEach((child) => {
      child.addEventListener('focus', () => {
        console.log('focus tab.childNodes.forEach');
        child.setAttribute('aria-selected', 'true');
        child.classList.add('selected');
      });

      child.addEventListener('focusout', () => {
        console.log('focusout tab.childNodes.forEach');
        child.setAttribute('aria-selected', 'false');
        child.classList.remove('selected');
      });
    });
  });

  navContainer.addEventListener('focusout', () => {
    console.log('tabListContainer.focusout');
    firstFocusTrap.setAttribute('tabindex', '-1');
  });

  firstTab.addEventListener('focus', () => {
    firstFocusTrap.setAttribute('tabindex', '0');
  });

  firstFocusTrap.addEventListener('focus', () => {
    lastTab.focus();
  });

  lastFocusTrap.addEventListener('focus', () => {
    firstTab.focus();
  });

  // groupItem.addEventListener('focusout', () => {
  //   firstFocusTrap.setAttribute('tabindex', '-1');
  // });

  // groupItem.addEventListener('keydown', function (e) {
  //   if (e.key === 'Escape') {
  //     document.querySelector('#dropdown-details').open = false;
  //     document.querySelector('#dropdown-details > summary').focus();
  //   }
  // });

  // firstItem.addEventListener('focus', () => {
  //   firstFocusTrap.setAttribute('tabindex', '0');
  // });

  // firstFocusTrap.addEventListener('focus', () => {
  //   lastItem.focus();
  // });

  // lastFocusTrap.addEventListener('focus', () => {
  //   firstItem.focus();
  // });
});
