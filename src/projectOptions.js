import { CreateDom, domElements } from './domCache';
import {
  addCloseEventForProject,
  toggleFadedForProject,
} from './generalEvents';
import { projectArray } from './popoutProject';
import { allTabs, displayNextTab } from './tabs';

export function displayOptions(e) {
  toggleFadedForProject();
  const { index } = e.currentTarget.parentElement.dataset;
  const projectTarget = findTargetProject(index);
  const div = CreateDom.makeDiv();
  const closeSVG = CreateDom.makeCloseSVG();
  const newForm = editDiv(div, closeSVG, projectTarget);
  setDelete(newForm, e, div);
  changeOptions(newForm, e, projectTarget, index, div);
  domElements.hiddenContainer.appendChild(div);
}

function findTargetProject(index) {
  const target = projectArray.filter(
    (project) => Number(project.indexSet) === Number(index)
  );

  return target;
}

function editDiv(div, closeSVG, project) {
  addCloseEventForProject(closeSVG);
  const h2 = CreateDom.makeH2();
  h2.textContent = project[0].name;
  const newForm = CreateDom.makeForm();
  const deleteButton = CreateDom.makeDelete();
  deleteButton.classList.add('delete');
  div.classList.add('edit-project');
  newForm.appendChild(deleteButton);
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
  changeButton.addEventListener('click', updateValues);
}

function updateValues(e) {
  e.preventDefault();
  const newValues = {
    name: e.target.newName.value,
    color: e.target.newColor.value,
  };
  const a = e.target.originalDiv.querySelector('a');
  const { originalIndex } = e.target;
  updateDiv(a, newValues, originalIndex);
  e.target.popoutDiv.style.display = 'none';
}

function updateDiv(elem, obj, i) {
  if (obj.name !== '') {
    elem.textContent = obj.name;
    projectArray[i].name = obj.name;
  }
  elem.style.color = obj.color;
  projectArray[i].color = obj.color;
  toggleFadedForProject();
}

function setDelete(node, event, container) {
  const deleteButton = node.querySelector('.delete');
  deleteButton.originalDiv = event.currentTarget.parentElement;
  deleteButton.popoutDiv = container;
  deleteButton.addEventListener('click', deleteProject);
}

function deleteProject(e) {
  e.preventDefault();
  const projectIndex = e.target.originalDiv.dataset.index;
  e.target.originalDiv.remove();
  e.target.popoutDiv.style.display = 'none';
  allTabs.forEach((tab) => {
    if (tab.dataset.index === projectIndex) {
      const tabSelected = tab.dataset.index;
      tab.remove();
      displayNextTab(tabSelected);
    }
  });

  toggleFadedForProject();
}
