import { CreateDom, domElements } from './domCache';

function displayNewTaskPanel(e) {
  domElements.projectsContainer.classList.add('faded');
  domElements.taskPanel.classList.remove('hidden');
  e.currentTarget.style.pointerEvents = 'none';
}

export { displayNewTaskPanel };
