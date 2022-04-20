window.addEventListener('DOMContentLoaded', (event) => {
  function showSnackbar(snackbar) {
    //If snackbar already existing, remove it
    if (document.getElementById('vtmn-snackbar-1')) {
      document.getElementById('vtmn-snackbar-1').parentElement.remove();
    }
    if (document.getElementById('vtmn-snackbar-2')) {
      document.getElementById('vtmn-snackbar-2').parentElement.remove();
    }
    if (document.getElementById('vtmn-snackbar-3')) {
      document.getElementById('vtmn-snackbar-3').parentElement.remove();
    }
    if (document.getElementById('vtmn-snackbar-4')) {
      document.getElementById('vtmn-snackbar-4').parentElement.remove();
    }

    //Create the block div container
    let newDiv = document.createElement('div');
    newDiv.classList.add('block');
    newDiv.setAttribute('role', 'status');
    document.body.appendChild(newDiv);

    if (snackbar === 'vtmn-snackbar-1') {
      document.body.lastChild.innerHTML = `
        <div id="vtmn-snackbar-1" class="vtmn-snackbar">
          <div class="vtmn-snackbar_content">
            This is the description of a snackbar
          </div>
          <button id="btn-dismiss-1" class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small vtmn-btn--icon-alone">
            <span class="vtmn-sr-only">Close snackbar</span>
            <span class="vtmx-close-line" role="presentation"></span>
          </button>
        </div>`;
      let snackbar = document.getElementById('vtmn-snackbar-1');
      document
        .getElementById('btn-dismiss-1')
        .addEventListener('click', function () {
          snackbar.parentElement.remove();
        });
      timeOut(snackbar);
    } else if (snackbar === 'vtmn-snackbar-2') {
      document.body.lastChild.innerHTML = `
        <div id="vtmn-snackbar-2" class="vtmn-snackbar">
          <div class="vtmn-snackbar_content">
            This is the description of a snackbar
          </div>
        </div>`;
      let snackbar = document.getElementById('vtmn-snackbar-2');
      timeOut(snackbar);
    } else if (snackbar === 'vtmn-snackbar-3') {
      document.body.lastChild.innerHTML = `
        <div id="vtmn-snackbar-3" class="vtmn-snackbar">
          <div class="vtmn-snackbar_content">
            This is the description of a snackbar
          </div>
          <button class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small">
            Action
          </button>
          <button id="btn-dismiss-3" class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small vtmn-btn--icon-alone">
            <span class="vtmn-sr-only">Close snackbar</span>
            <span class="vtmx-close-line" role="presentation"></span>
          </button>
        </div>`;
      let snackbar = document.getElementById('vtmn-snackbar-3');
      document
        .getElementById('btn-dismiss-3')
        .addEventListener('click', function () {
          snackbar.parentElement.remove();
        });
      timeOut(snackbar);
    } else if (snackbar === 'vtmn-snackbar-4') {
      document.body.lastChild.innerHTML = `
        <div id="vtmn-snackbar-4" class="vtmn-snackbar">
          <div class="vtmn-snackbar_content">
            This is the description of a snackbar
          </div>
          <button class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small">
            Action
          </button>
        </div>`;
      let snackbar = document.getElementById('vtmn-snackbar-4');
      timeOut(snackbar);
    }

    function timeOut(snackbar) {
      snackbar.classList.add('show');
      setTimeout(function () {
        snackbar.classList.remove('show');
        snackbar.parentElement.remove();
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

  document
    .getElementById('btn-snackbar-3')
    .addEventListener('click', function () {
      showSnackbar('vtmn-snackbar-3');
    });

  document
    .getElementById('btn-snackbar-4')
    .addEventListener('click', function () {
      showSnackbar('vtmn-snackbar-4');
    });
});
