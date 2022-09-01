import { renderTasks } from './renderTask';
import { setItem } from './storage';
import { getTasksList } from './tasksGateway';
import { initTodoListHandlers } from './todoList';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (event) => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
