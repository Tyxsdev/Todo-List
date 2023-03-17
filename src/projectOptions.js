import { CreateDom, domElements } from './domCache';
import { addCloseEvent, toggleFaded } from './generalEvents';
import { links, projectArray } from './popoutProject';

export function displayOptions(e) {
  toggleFaded();
  const { index } = e.currentTarget.parentElement.dataset;
  const projectTarget = findTargetProject(index);
  const div = CreateDom.makeDiv();
  const closeSVG = CreateDom.makeCloseSVG();
  editDiv(div, closeSVG, projectTarget);
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
}
