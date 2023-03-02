import { domElements, CreateDom } from './domCache.js';
import { generateNewTab } from './tabs.js';

const links = [];
links.push(domElements.general);

domElements.createProject.addEventListener('click', getValues);

function handdleLinks(div) {
  links.push(div);
  for (let i = 0; i < links.length; i += 1) {
    links[i].dataset.index = `${i}`;
  }
}

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
  const svg = CreateDom.makeSVG();
  a.textContent = name;
  a.style.color = color;
  a.classList.add('title');
  div.classList.add('project');
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
  domElements.mainContainer.classList.remove('faded');
}

export function displayProjectPanel() {
  domElements.hiddenProject.style.display = 'block';
  domElements.mainContainer.classList.add('faded');
}
