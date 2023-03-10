import { CreateDom, domElements } from './domCache';
import { addCloseEvent, toggleFaded } from './generalEvents';

export function displayOptions(e) {
  toggleFaded();
  const div = CreateDom.makeDiv();
  const closeSVG = CreateDom.makeCloseSVG();
  const name = e.currentTarget.previousElementSibling.textContent;
  editDiv(div, closeSVG, name);
  domElements.hiddenContainer.appendChild(div);
}

function editDiv(div, closeSVG, name) {
  addCloseEvent(closeSVG);
  const h2 = CreateDom.makeH2();
  h2.textContent = name;
  const newForm = CreateDom.makeForm();
  div.classList.add('edit-project');
  div.appendChild(h2);
  div.appendChild(closeSVG);
  div.appendChild(newForm);
}
