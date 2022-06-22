window.addEventListener('DOMContentLoaded', () => {
  const templateModal = ` <div
    class="vtmn-modal"
    id="vtmn-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="vtmn-modal-title"
  >
    <div id="vtmn-modal-background" class="vtmn-modal_background-overlay"></div>
    <div class="vtmn-modal_content">
    <span id="block-focus-trap-start" tabindex="0"></span>
      <div class="vtmn-modal_content_title">
        <p class="vtmn-modal_content_title--text">What is a modal?</p>
        <button
          id="btn-close-modal-1"
          class="
              vtmn-btn
              vtmn-btn_variant--ghost
              vtmn-btn--icon-alone"
          aria-label="close"
        >
          <span class="vtmx-close-line" aria-hidden="true"></span>
          <span class="vtmn-sr-only">Close modal</span>
        </button>
      </div>
      <div class="vtmn-modal_content_body">
        <p class="vtmn-modal_content_body--text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia?
        </p>
      </div>
      <div class="vtmn-modal_content_actions">
        <button
          id="btn-close-modal-2"
          class="vtmn-btn vtmn-btn_variant--secondary"
        >
          Got Back
        </button>
        <button
          id="btn-close-modal-3"
          class="vtmn-btn vtmn-btn_variant--primary"
        >
          Yes, I understand
        </button>
      </div>
       <span id="block-focus-trap-end" tabindex="0"></span>
    </div>
  </div>`;

  function createModal() {
    //Create the block div container
    let newDiv = document.createElement('div');
    newDiv.classList.add('block');
    document.body.appendChild(newDiv);
    instanciateModal();
  }

  function instanciateModal() {
    document.body.lastChild.innerHTML = templateModal;

    document.getElementById('btn-close-modal-1').focus();

    document
      .getElementById('btn-close-modal-1')
      .addEventListener('click', handleClose);
    document
      .getElementById('btn-close-modal-2')
      .addEventListener('click', handleClose);
    document
      .getElementById('btn-close-modal-3')
      .addEventListener('click', handleClose);
    document
      .getElementById('vtmn-modal-background')
      .addEventListener('click', handleClose);

    document
      .getElementById('block-focus-trap-start')
      .addEventListener('focus', () => {
        document.getElementById('btn-close-modal-3').focus();
      });

    document
      .getElementById('block-focus-trap-end')
      .addEventListener('focus', () => {
        document.getElementById('btn-close-modal-1').focus();
      });

    document.getElementById('vtmn-modal').addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    });
  }

  document.getElementById('open-modal').addEventListener('click', () => {
    if (!document.getElementById('vtmn-modal')) {
      createModal();
    }
  });

  function handleClose() {
    document.getElementById('vtmn-modal').parentElement.remove();
    document.getElementById('open-modal').focus();
  }
});
