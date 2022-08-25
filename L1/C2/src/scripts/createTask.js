// eslint-disable-next-line import/named
import { renderTasks } from "./renderTask.js";
import { getItem, setItem } from "./storage.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const newTask = () => {
    const taskField = document.querySelector(".task-input");
    const text = taskField.value;

    if (!text) {
        return;
    }

    taskField.value = "";

    const newTask = {
        text,
        done: false,
        time: new Date(),
        id: Math.random(),
    };
    createTask(newTask)
        .then(() => getTasksList())
        .then((newTasksList) => {
            setItem("tasksList", newTasksList);
            renderTasks();
        });
};