import { CreateDom, domElements } from './domCache';
import { closeNewTaskPanel, getTodayDate } from './generalEvents';
import { showNewTask } from './showTaskDescription';

const arrayOfTask = [];
let count = 0;

function displayNewTaskPanel(e) {
  domElements.projectsContainer.classList.add('faded');
  domElements.taskPanel.classList.remove('hidden');
  setDate();
  e.currentTarget.style.pointerEvents = 'none';
  domElements.createTaskButton.tab = e.target.parentNode.parentNode;
}

function setDate() {
  const date = getTodayDate();
  domElements.taskEnd.setAttribute('value', date);
  domElements.taskEnd.setAttribute('min', date);
}

function getTaskValues(e) {
  e.preventDefault();
  const taskNameValue = domElements.taskName.value;
  const taskColorValue = domElements.taskColor.value;
  const taskDateValue = domElements.taskEnd.value;
  const taskCommentValue = domElements.taskComment.value;
  const tabContainer = e.target.tab;
  createNewTask(
    taskNameValue,
    taskColorValue,
    taskDateValue,
    taskCommentValue,
    tabContainer
  );
}

function createNewTask(name, color, date, comment, tab) {
  if (name === '') {
    domElements.taskError.style.display = 'block';
  } else {
    const newTask = new Task(name, color, date, comment);
    newTask.setId();
    arrayOfTask.push(newTask);
    displayTask(newTask, tab);
  }
}

function displayTask(task, tab) {
  const container = CreateDom.makeDiv();
  const checkbox = CreateDom.makeCheckbox();
  const name = CreateDom.makeA();
  const time = CreateDom.makeSpan();
  const options = CreateDom.makeOptionsSVG();
  const description = CreateDom.makeDiv();

  container.classList.add('todo');
  name.textContent = task.name;
  name.style.color = task.color;
  name.style.flex = '0';
  name.setAttribute('href', '#');
  time.textContent = `Complete before "${task.date}"`;
  time.classList.add('time');
  options.classList.add('todo-options');
  description.classList.add('todo-description');
  description.classList.add('hidden');

  name.addEventListener('click', showNewTask);

  container.appendChild(checkbox);
  container.appendChild(name);
  container.appendChild(time);
  container.appendChild(options);
  container.appendChild(description);
  tab.appendChild(container);

  closeNewTaskPanel();
}

class Task {
  constructor(name, color, date, comment) {
    this.name = name;
    this.color = color;
    this.date = date;
    this.comment = comment;
  }

  setId() {
    this.id = count;
    count += 1;
  }
}

export { displayNewTaskPanel, getTaskValues };
