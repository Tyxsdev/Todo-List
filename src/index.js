import './main.css';
import { displayProjectPanel } from './popoutProject';
import { domElements } from './domCache.js';

domElements.newProject.addEventListener('click', displayProjectPanel);
