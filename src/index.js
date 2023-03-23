import './main.css';
import { displayProjectPanel } from './popoutProject';
import { domElements } from './domCache.js';
import { displayNewTaskPanel, getTaskValues } from './addTask';
import { closeNewTaskPanel } from './generalEvents';
import { showFirstTask } from './showTaskDescription';

domElements.newProjectButton.addEventListener('click', displayProjectPanel);
domElements.addTask.addEventListener('click', displayNewTaskPanel);
domElements.closeTaskPanel.addEventListener('click', closeNewTaskPanel);
domElements.createTaskButton.addEventListener('click', getTaskValues);
domElements.firstTask.addEventListener('click', showFirstTask);
