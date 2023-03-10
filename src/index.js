import './main.css';
import { displayProjectPanel } from './popoutProject';
import { domElements } from './domCache.js';
import { displayOptions } from './projectOptions';

domElements.newProjectButton.addEventListener('click', displayProjectPanel);
domElements.proOptions.addEventListener('click', displayOptions);
