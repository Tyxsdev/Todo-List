import { CreateDom, domElements } from './domCache';
import { toggleFaded } from './generalEvents';

function work(e) {
  domElements.taskPanel.classList.remove('hidden');
}

export { work };
