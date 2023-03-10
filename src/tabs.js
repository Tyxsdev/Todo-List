import { CreateDom, domElements } from './domCache';

let allTabs;

export function generateNewTab(links) {
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] && links.length === i + 1) {
      const div = CreateDom.makeDiv();
      div.classList.add('list-container');
      div.textContent = `${i}`;
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
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('click', selectListToDisplay);
  }
}

function selectListToDisplay(e) {
  const targetIndex = e.currentTarget.dataset.index;
  refreshTabs();
  hideAllTabs();
  allTabs[targetIndex].classList.remove('hidden-tab');
}

function refreshTabs() {
  allTabs = domElements.refreshList();
}

function hideAllTabs() {
  allTabs.forEach((tab) => tab.classList.add('hidden-tab'));
}
