window.addEventListener('DOMContentLoaded', (event) => {
  for (let i = 2; i <= 3; i++) {
    let container = document.getElementById(`vtmn-progressbar-container-${i}`);
    let label = document.getElementById(`vtmn-progressbar-label-${i}`);
    let progress = document.getElementById(`vtmn-progressbar-${i}`);

    let type = 'circular';

    resetProgress(container, progress, label, type);
    launchProgress(container, progress, label, type);
  }

  function launchProgress(container, progress, label, type) {
    setInterval(() => {
      let random = getRandom(1, 15);
      let currentLabelValue = Number(label.getAttribute('data-value'));
      let newValue = Number(currentLabelValue + random);
      if (newValue >= 100) {
        newValue = 100;
        addProgress(container, progress, label, type, newValue);
        setTimeout(() => {
          resetProgress(container, progress, label, type);
        }, 2000);
      } else {
        addProgress(container, progress, label, type, newValue);
      }
    }, 1000);
  }

  function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  function addProgress(container, progress, label, type, value) {
    label.setAttribute('data-value', `${value}`);
    container.setAttribute('aria-valuenow', `${value}`);
    switch (type) {
      case 'linear':
        progress.style.transform = `translateX(calc(-100% + ${value}%))`;
        break;
      case 'circular':
        setCircularProgress(container, progress, value);
        break;
    }
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

  function resetProgress(container, progress, label, type) {
    label.setAttribute('data-value', '0');
    container.setAttribute('aria-valuenow', '0');
    switch (type) {
      case 'linear':
        progress.style.transform = `translateX(-105%)`;
        break;
      case 'circular':
        setCircularProgress(container, progress, 0);
        break;
    }
  }
});
