window.addEventListener('DOMContentLoaded', (event) => {
  const menu = document.querySelectorAll('#dropdown-demo > details > summary');
  const menuItems = document.querySelectorAll(
    '#dropdown-demo > details > div.vtmn-dropdown_items > label',
  );
  const keys = {
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
  };

  const goToMenuItem = function (idx) {
    if (idx == menuItems.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = menuItems.length - 1;
    }
    menuItems[idx].focus();
    currentIndex = idx;
  };

  Array.prototype.forEach.call(menuItems, function (el, i) {
    // el.setAttribute('tabindex', '-1');
    el.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case keys.tab:
          if (event.shiftKey) {
            gotoIndex(currentIndex - 1);
          } else {
            gotoIndex(currentIndex + 1);
          }
          prevdef = true;
          break;
        case keys.right:
          gotoIndex(currentIndex + 1);
          prevdef = true;
          break;
        case keys.left:
          gotoIndex(currentIndex - 1);
          prevdef = true;
          break;
        case keys.esc:
          gotoIndex(currentIndex);
          prevdef = true;
          break;
        case keys.down:
          gotoIndex(currentIndex + 1);
          prevdef = true;
          break;
        case keys.up:
          gotoIndex(currentIndex - 1);
          prevdef = true;
          break;
        case keys.enter:
        case keys.space:
          alert(this.innerText);
          prevdef = true;
          break;
      }
      if (prevdef) {
        event.preventDefault();
        event.stopPropagation();
      }
      return false;
    });
    el.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });
});
