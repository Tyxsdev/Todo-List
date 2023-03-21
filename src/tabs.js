import { CreateDom, domElements } from './domCache';
import { work } from './addTask';

let allTabs;
refreshTabs();

function generateNewTab(links, project) {
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] && links.length === i + 1) {
      const div = CreateDom.makeDiv();
      const header = CreateDom.makeDiv();
      const h2 = CreateDom.makeH2();
      const addTask = CreateDom.makeNewTaskButton();
      div.classList.add('list-container');
      div.dataset.index = i;
      header.classList.add('list-header');
      h2.textContent = project.name;
      addTask.addEventListener('click', work);
      header.appendChild(h2);
      header.appendChild(addTask);
      div.appendChild(header);
      domElements.mainContainer.appendChild(div);
    }
  }
  displayLastTab();
  setEvent(links);
}

function displayLastTab() {
  refreshTabs();
  hideAllTabs();
  allTabs[allTabs.length - 1].classList.remove('hidden-tab');
}

function setEvent(links) {
  links.forEach((link) => link.addEventListener('click', selectListToDisplay));
}

function selectListToDisplay(e) {
  const targetIndex = e.currentTarget.dataset.index;
  refreshTabs();
  hideAllTabs();
  const selectedTab = allTabs.filter(
    (tab) => tab.dataset.index === targetIndex
  );
  selectedTab[0].classList.remove('hidden-tab');
}

function refreshTabs() {
  allTabs = domElements.refreshList();
}

function hideAllTabs() {
  allTabs.forEach((tab) => tab.classList.add('hidden-tab'));
}

function displayNextTab(deleted) {
  const indexDeleted = allTabs.findIndex(
    (tab) => Number(tab.dataset.index) === Number(deleted)
  );
  allTabs.forEach((tab) => {
    if (Number(tab.dataset.index) === Number(deleted) + 1) {
      tab.classList.remove('hidden-tab');
    }
  });
  const removed = allTabs.splice(indexDeleted, 1);
}

export { generateNewTab, allTabs, displayNextTab };
