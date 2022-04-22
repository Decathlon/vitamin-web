window.addEventListener('DOMContentLoaded', initLinearProgressbarShowcase);

function initLinearProgressbarShowcase() {
  let container = document.getElementById(`vtmn-progressbar-container-1`);
  let label = document.getElementById('vtmn-progressbar-label-1');
  let progress = document.getElementById(`vtmn-progressbar-1`);

  resetProgress(container, progress, label);
  launchProgress(container, progress, label);

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
    progress.style.transform = `translateX(calc(-100% + ${value}%))`;
  }

  function resetProgress(container, progress, label) {
    label.textContent = '0%';
    container.setAttribute('aria-valuenow', '0');
    progress.style.transform = `translateX(-105%)`;
  }

  window.removeEventListener('DOMContentLoaded', initLinearProgressbarShowcase);
}
