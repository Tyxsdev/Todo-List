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

function getTodayDate() {
  const now = new Date();
  const day = `0${now.getDate()}`.slice(-2);
  const month = `0${now.getMonth() + 1}`.slice(-2);

  const today = `${now.getFullYear()}-${month}-${day}`;
  return today;
}

export {
  toggleFadedForProject,
  addCloseEventForProject,
  closeProjectsPopouts,
  closeNewTaskPanel,
  getTodayDate,
};
