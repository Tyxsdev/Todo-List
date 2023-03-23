import './main.css';
import { displayProjectPanel } from './popoutProject';
import { domElements } from './domCache.js';
import { displayNewTaskPanel } from './addTask';
import { closeNewTaskPanel } from './generalEvents';

domElements.newProjectButton.addEventListener('click', displayProjectPanel);
domElements.addTask.addEventListener('click', displayNewTaskPanel);
domElements.closeTaskPanel.addEventListener('click', closeNewTaskPanel);
