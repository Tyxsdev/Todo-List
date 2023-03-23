import { domElements } from './domCache';

function addCloseEventForProject(elem) {
  elem.addEventListener('click', closeProjectsPopouts);
}

function closeProjectsPopouts(e) {
  toggleFadedForProject();
  e.currentTarget.parentNode.style.display = 'none';
}

function toggleFadedForProject(e) {
  domElements.mainContainer.classList.toggle('faded');
}

function closeNewTaskPanel(e) {
  domElements.projectsContainer.classList.remove('faded');
  domElements.taskPanel.classList.add('hidden');
  domElements.addTask.style.pointerEvents = '';
}

export {
  toggleFadedForProject,
  addCloseEventForProject,
  closeProjectsPopouts,
  closeNewTaskPanel,
};
