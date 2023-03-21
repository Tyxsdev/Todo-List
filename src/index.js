import './main.css';
import { displayProjectPanel } from './popoutProject';
import { domElements } from './domCache.js';
import { work } from './addTask';

domElements.newProjectButton.addEventListener('click', displayProjectPanel);
domElements.addTask.addEventListener('click', work);
