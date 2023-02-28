import './main.css';
import { setNewProject } from './popoutProject';
import { domCache } from './domCache.js';

const { newProject } = domCache();
newProject.addEventListener('click', setNewProject);
