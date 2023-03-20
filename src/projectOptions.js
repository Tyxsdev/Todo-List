import { CreateDom, domElements } from './domCache';
import { addCloseEvent, toggleFaded, preventDefault } from './generalEvents';
import { projectArray } from './popoutProject';

export function displayOptions(e) {
  toggleFaded();
  const { index } = e.currentTarget.parentElement.dataset;
  const projectTarget = findTargetProject(index);
  const div = CreateDom.makeDiv();
  const closeSVG = CreateDom.makeCloseSVG();
  const newForm = editDiv(div, closeSVG, projectTarget);
  changeOptions(newForm, e, projectTarget, index, div);
  domElements.hiddenContainer.appendChild(div);
}

function findTargetProject(index) {
  const target = projectArray.filter((project) => project.indexSet == index);
  return target;
}

function editDiv(div, closeSVG, project) {
  addCloseEvent(closeSVG);
  const h2 = CreateDom.makeH2();
  h2.textContent = project[0].name;
  const newForm = CreateDom.makeForm();
  div.classList.add('edit-project');
  div.appendChild(h2);
  div.appendChild(closeSVG);
  div.appendChild(newForm);
  return newForm;
}

function changeOptions(node, event, target, index, container) {
  const newName = node.querySelector('#name');
  const newColor = node.querySelector('#color');
  const changeButton = node.querySelector('button');
  changeButton.originalDiv = event.currentTarget.parentElement;
  changeButton.popoutDiv = container;
  changeButton.originalProject = target;
  changeButton.originalIndex = index;
  changeButton.newColor = newColor;
  changeButton.newName = newName;
  changeButton.addEventListener('click', preventDefault);
  changeButton.addEventListener('click', updateValues);
}

function updateValues(e) {
  const newValues = {
    name: e.target.newName.value,
    color: e.target.newColor.value,
  };
  const a = e.target.originalDiv.querySelector('a');
  a.textContent = newValues.name;
  a.style.color = newValues.color;
  e.target.popoutDiv.style.display = 'none';
  toggleFaded();
  projectArray[e.target.originalIndex].name = newValues.name;
  projectArray[e.target.originalIndex].color = newValues.color;
}
