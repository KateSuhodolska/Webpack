import { renderTasks } from "./renderTask.js";
import { getItem, setItem } from "./storage.js";
import { getTasksList, updateTask } from "./tasksGateway.js";

export const onToggleTask = (event) => {
    const isCheckbox = event.target.classList.contains("list__item-checkbox");
    if (!isCheckbox) {
        return;
    }

    const taskId = event.target.dataset.id;
    const task = getTasksList(taskId);
    const done = event.target.checked;

    const updatedTask = {
        ...task,
        done,
        finishDate: done ? new Date().toString() : null,
    };

    updateTask(taskId, updatedTask)
        .then(() => {
            getTasksList();
        })
        .then((newTasksList) => {
            setItem("tasksList", newTasksList);
            renderTasks();
        });
};