import { domElements, CreateDom } from './domCache.js';
import { generateNewTab } from './tabs.js';
import { addCloseEvent, toggleFaded, preventDefault } from './generalEvents.js';
import { displayOptions } from './projectOptions';

const links = [];
links.push(domElements.general);

const projectArray = [];

class CreateProjectObject {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  setIndex() {
    const newProjectIndex = projectArray.findIndex(
      (elem) => elem.name === this.name
    );
    this.indexSet = newProjectIndex;
  }
}

const defaultProject = new CreateProjectObject('General', 'black');
projectArray.push(defaultProject);
defaultProject.setIndex();
domElements.createProject.addEventListener('click', getValues);
addCloseEvent(domElements.closeNewProject);
domElements.proOptions.addEventListener('click', displayOptions);

function handdleLinks(div) {
  links.push(div);
}

function getValues(e) {
  preventDefault();
  const projectCreated = handdleNewProject();
  addProject(projectCreated);
  domElements.name.value = '';
  domElements.color.value = '';
}

function handdleNewProject() {
  const newProject = new CreateProjectObject(
    domElements.name.value,
    domElements.color.value
  );
  projectArray.push(newProject);
  newProject.setIndex();
  return newProject;
}

function addProject(projectCreated) {
  if (projectCreated.name === '') {
    domElements.errorMessage.style.display = 'block';
    return;
  }
  const div = CreateDom.makeDiv();
  const a = CreateDom.makeA();
  const svg = CreateDom.makeOptionsSVG();
  a.textContent = projectCreated.name;
  a.style.color = projectCreated.color;
  a.classList.add('title');
  div.classList.add('project');
  div.dataset.index = projectCreated.indexSet;
  div.appendChild(a);
  div.appendChild(svg);
  domElements.newProjectContainer.appendChild(div);
  handdleLinks(div);
  generateNewTab(links);
  defaultDisplay();
}

function defaultDisplay() {
  domElements.errorMessage.style.display = 'none';
  domElements.hiddenProject.style.display = 'none';
  toggleFaded();
}

function displayProjectPanel() {
  domElements.hiddenProject.style.display = 'block';
  toggleFaded();
}

export { displayProjectPanel, links, projectArray };
