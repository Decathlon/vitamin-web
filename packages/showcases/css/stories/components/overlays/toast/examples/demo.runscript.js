window.addEventListener('DOMContentLoaded', (event) => {
  let nbToast = 0;
  let counter = 0;
  function showToast(toast) {
    //Create the block div container
    let newDiv = document.createElement('div');
    newDiv.classList.add('block');
    document.body.appendChild(newDiv);

    if (toast === 'vtmn-toast-1') {
      let toastId = '1-' + counter;
      document.body.lastChild.innerHTML = `
        <div id="vtmn-toast-${toastId}" class="vtmn-toast" role="status">
          <div class="vtmn-toast_content">
            This is the description of a toast
          </div>
        </div>`;
      let toast = document.getElementById('vtmn-toast-' + toastId);
      timeOut(toast);
    } else if (toast === 'vtmn-toast-2') {
      let toastId = '2-' + counter;
      document.body.lastChild.innerHTML = `
        <div id="vtmn-toast-${toastId}" class="vtmn-toast vtmn-toast--with-icon-info" role="status">
          <div class="vtmn-toast_content">
            This is the description of a toast
          </div>
        </div>`;
      let toast = document.getElementById('vtmn-toast-' + toastId);
      timeOut(toast);
    } else if (toast === 'vtmn-toast-3') {
      let toastId = '3-' + counter;
      document.body.lastChild.innerHTML = `
        <div id="vtmn-toast-${toastId}" class="vtmn-toast" role="status">
          <div class="vtmn-toast_content">
            This is the description of a toast
          </div>
          <button id="btn-close-toast-${toastId}" class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small vtmn-btn--icon-alone" aria-label="Close alert">
            <span class="vtmx-close-line" role="presentation"></span>
          </button>
        </div>`;
      let toast = document.getElementById('vtmn-toast-' + toastId);
      document
        .getElementById('btn-close-toast-' + toastId)
        .addEventListener('click', function () {
          toast.parentElement.remove();
          nbToast--;
          reorderToasts();
        });
      timeOut(toast);
    } else if (toast === 'vtmn-toast-4') {
      let toastId = '4-' + counter;
      document.body.lastChild.innerHTML = `
        <div id="vtmn-toast-${toastId}" class="vtmn-toast vtmn-toast--with-icon-info" role="status">
          <div class="vtmn-toast_content">
            This is the description of a toast
          </div>
          <button id="btn-close-toast-${toastId}" class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small vtmn-btn--icon-alone" aria-label="Close alert">
            <span class="vtmx-close-line" role="presentation"></span>
          </button>
        </div>`;
      let toast = document.getElementById('vtmn-toast-' + toastId);
      document
        .getElementById('btn-close-toast-' + toastId)
        .addEventListener('click', function () {
          toast.parentElement.remove();
          nbToast--;
          reorderToasts();
        });
      timeOut(toast);
    }

    function timeOut(toast) {
      toast.classList.add('show');
      toast.style.transform =
        'translate(50%, calc(-50% - ' + 80 * nbToast + 'px)';
      nbToast++;
      setTimeout(function () {
        toast.parentElement.remove();
        nbToast--;
        reorderToasts();
      }, 5000);
    }

    function reorderToasts() {
      let toasts = document.getElementsByClassName('vtmn-toast');
      toasts.forEach((toast, index) => {
        toast.style.transform =
          'translate(50%, calc(-50% - ' + 80 * index + 'px)';
      });
    }

    counter++;
  }

  document.getElementById('btn-toast-1').addEventListener('click', function () {
    showToast('vtmn-toast-1');
  });

  document.getElementById('btn-toast-2').addEventListener('click', function () {
    showToast('vtmn-toast-2');
  });

  document.getElementById('btn-toast-3').addEventListener('click', function () {
    showToast('vtmn-toast-3');
  });

  document.getElementById('btn-toast-4').addEventListener('click', function () {
    showToast('vtmn-toast-4');
  });
});
