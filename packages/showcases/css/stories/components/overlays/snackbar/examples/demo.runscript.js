window.addEventListener('DOMContentLoaded', (event) => {
  function showSnackbar(snackbar) {
    //If snackbar already existing, remove it
    if (document.getElementById('vtmn-snackbar-1')) {
      document.getElementById('vtmn-snackbar-1').remove();
    }
    if (document.getElementById('vtmn-snackbar-2')) {
      document.getElementById('vtmn-snackbar-2').remove();
    }

    //Create the block div container
    let newDiv = document.createElement('div');
    newDiv.classList.add('block');
    document.body.appendChild(newDiv);

    if (snackbar === 'vtmn-snackbar-1') {
      document.body.lastChild.innerHTML = `<div id="vtmn-snackbar-1" class="vtmn-snackbar"><div class="vtmn-snackbar_content">This is the description of a snackbar</div><button id="btn-dismiss" class="vtmn-btn vtmn-btn_variant--secondary vtmn-btn_size--small">Button</button></div>`;
      let snackbar = document.getElementById('vtmn-snackbar-1');
      document
        .getElementById('btn-dismiss')
        .addEventListener('click', function () {
          snackbar.remove();
        });
      timeOut(snackbar);
    } else if (snackbar === 'vtmn-snackbar-2') {
      document.body.lastChild.innerHTML =
        '<div id="vtmn-snackbar-2" class="vtmn-snackbar"><div class="vtmn-snackbar_content">This is the description of a snackbar</div></div>';
      let snackbar = document.getElementById('vtmn-snackbar-2');
      timeOut(snackbar);
    }

    function timeOut(snackbar) {
      snackbar.classList.add('show');
      setTimeout(function () {
        snackbar.classList.remove('show');
        snackbar.remove();
      }, 5000);
    }
  }

  document
    .getElementById('btn-snackbar-1')
    .addEventListener('click', function () {
      showSnackbar('vtmn-snackbar-1');
    });

  document
    .getElementById('btn-snackbar-2')
    .addEventListener('click', function () {
      showSnackbar('vtmn-snackbar-2');
    });
});
