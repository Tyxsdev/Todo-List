import { domElements } from './domCache';

function addCloseEvent(elem) {
  elem.addEventListener('click', close);
}

function close(e) {
  toggleFaded();
  e.currentTarget.parentNode.style.display = 'none';
}

function toggleFaded() {
  domElements.mainContainer.classList.toggle('faded');
}

export { toggleFaded, addCloseEvent, close };
