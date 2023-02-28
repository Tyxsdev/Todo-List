import { domCache } from './domCache.js';
import { generateNewTab } from './tabs.js';

const domElements = domCache();

function getValues(e) {
  e.preventDefault();
  const name = document.querySelector('#name');
  const color = document.querySelector('#color');
  addProject(name.value, color.value);
  name.value = '';
  color.value = '';
}

function addProject(name, color) {
  if (name === '') {
    domElements.errorMessage.style.display = 'block';
    return;
  }
  const div = document.createElement('div');
  const a = document.createElement('a');
  a.textContent = name;
  a.style.color = color;
  a.classList.add('project');
  div.appendChild(a);
  domElements.projectsContainer.appendChild(div);
  generateNewTab(a);
  defaultDisplay();
}

function defaultDisplay() {
  domElements.errorMessage.style.display = 'none';
  domElements.hiddenProject.style.display = 'none';
  domElements.mainContainer.classList.remove('faded');
}

export function setNewProject() {
  domElements.hiddenProject.style.display = 'block';
  domElements.mainContainer.classList.add('faded');
  domElements.createProject.addEventListener('click', getValues);
}
