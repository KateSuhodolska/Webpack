import { newTask } from "./createTask.js";
import { onToggleTask } from "./updateTask.js";

export const initTodoListHandlers = () => {
    const createTask = document.querySelector(".create-task-btn");
    createTask.addEventListener("click", newTask);

    const checkbox = document.querySelector(".list");
    checkbox.addEventListener("click", onToggleTask);
};