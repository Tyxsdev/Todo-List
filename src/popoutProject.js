import { domElements, CreateDom } from './domCache.js';
import { generateNewTab } from './tabs.js';

domElements.createProject.addEventListener('click', getValues);

function getValues(e) {
  e.preventDefault();
  addProject(domElements.name.value, domElements.color.value);
  domElements.name.value = '';
  domElements.color.value = '';
}

function addProject(name, color) {
  if (name === '') {
    domElements.errorMessage.style.display = 'block';
    return;
  }
  const div = CreateDom.makeDiv();
  const a = CreateDom.makeA();
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

export function displayProjectPanel() {
  domElements.hiddenProject.style.display = 'block';
  domElements.mainContainer.classList.add('faded');
}
