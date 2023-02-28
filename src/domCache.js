export function domCache() {
  const mainContainer = document.querySelector('.container');
  const projectsContainer = document.querySelector('.project-container');
  const hiddenProject = document.querySelector('.test-project');
  const newProject = document.querySelector('button');
  const createProject = document.querySelector('#create-project');
  const errorMessage = document.querySelector('.error');
  return {
    hiddenProject,
    newProject,
    mainContainer,
    createProject,
    projectsContainer,
    errorMessage,
  };
}
