import { CreateDom, domElements } from './domCache';

function showFirstTask(e) {
  const hidden = e.target.parentNode.querySelector('.first-description');
  hidden.classList.toggle('hidden');
}

function showNewTask(e) {
  const hidden = e.target.parentNode.querySelector('.todo-description');
  hidden.classList.toggle('hidden');
}

export { showFirstTask, showNewTask };
