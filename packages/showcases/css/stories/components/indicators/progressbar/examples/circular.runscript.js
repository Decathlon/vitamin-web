window.addEventListener('DOMContentLoaded', initCircularProgressbarShowcase);

function initCircularProgressbarShowcase() {
  for (let i = 2; i <= 3; i++) {
    let container = document.getElementById(`vtmn-progressbar-container-${i}`);
    let label = document.getElementById(`vtmn-progressbar-label-${i}`);
    let progress = document.getElementById(`vtmn-progressbar-${i}`);

    resetProgress(container, progress, label);
    launchProgress(container, progress, label);
  }

  function launchProgress(container, progress, label) {
    setInterval(() => {
      let random = getRandom(1, 15);
      let textLabel = label.textContent;
      let currentLabelValue = Number(
        textLabel.substring(0, textLabel.length - 1),
      );
      let newValue = Number(currentLabelValue + random);
      if (newValue >= 100) {
        newValue = 100;
        addProgress(container, progress, label, newValue);
        setTimeout(() => {
          resetProgress(container, progress, label);
        }, 2000);
      } else {
        addProgress(container, progress, label, newValue);
      }
    }, 1000);
  }

  function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  function addProgress(container, progress, label, value) {
    label.textContent = `${value}%`;
    container.setAttribute('aria-valuenow', `${value}`);
    setCircularProgress(container, progress, value);
  }

  function setCircularProgress(container, progress, value) {
    if (container.classList.contains('vtmn-progressbar_size--small')) {
      progress.setAttribute(
        'stroke-dashoffset',
        `calc(200px - (200px * ${value}) / 100)`,
      );
    } else {
      progress.setAttribute(
        'stroke-dashoffset',
        `calc(400px - (400px * ${value}) / 100)`,
      );
    }
  }

  function resetProgress(container, progress, label) {
    label.textContent = '0%';
    container.setAttribute('aria-valuenow', '0');
    setCircularProgress(container, progress, 0);
  }

  window.removeEventListener(
    'DOMContentLoaded',
    initCircularProgressbarShowcase,
  );
}
