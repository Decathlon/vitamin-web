window.addEventListener('DOMContentLoaded', () => {
  let btnOpen = document.getElementById('btn-popover-demo');
  let btnClose = document.getElementById('btn-close-popover-demo');
  let popoverContainer = document.getElementById('popover-demo-container');
  let popover = document.getElementById('popover-demo');

  btnOpen.addEventListener('click', () => {
    if (btnOpen.getAttribute('aria-pressed') === 'false') {
      console.log('click open pressed false');
      btnOpen.setAttribute('aria-pressed', 'true');
      popoverContainer.classList.add('show');
    } else {
      console.log('click open pressed true');
      btnOpen.setAttribute('aria-pressed', 'false');
      popoverContainer.classList.remove('show');
    }
  });

  btnClose.addEventListener('click', () => {
    console.log('close');
    btnOpen.setAttribute('aria-pressed', 'false');
    popoverContainer.classList.remove('show');
    btnOpen.focus();
  });

  popover.addEventListener('keydown', (e) => {
    console.log('echap');
    if (e.key === 'Escape') {
      btnOpen.setAttribute('aria-pressed', 'false');
      popoverContainer.classList.remove('show');
      btnOpen.focus();
    }
  });

  popover.addEventListener('focusout', () => {
    btnOpen.setAttribute('aria-pressed', 'false');
    popoverContainer.classList.remove('show');
  });
});
