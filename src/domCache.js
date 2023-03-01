function domCache() {
  const mainContainer = document.querySelector('.container');
  const projectsContainer = document.querySelector('.project-container');
  const hiddenProject = document.querySelector('.test-project');
  const newProject = document.querySelector('button');
  const createProject = document.querySelector('#create-project');
  const errorMessage = document.querySelector('.error');
  const name = document.querySelector('#name');
  const color = document.querySelector('#color');
  return {
    hiddenProject,
    newProject,
    mainContainer,
    createProject,
    projectsContainer,
    errorMessage,
    name,
    color,
  };
}

const domElements = domCache();

const CreateDom = {
  makeDiv() {
    const div = document.createElement('div');
    return div;
  },
  makeA() {
    const a = document.createElement('a');
    return a;
  },
};

export { domElements, CreateDom };
