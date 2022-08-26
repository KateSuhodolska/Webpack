const baseUrl =
    "https://62f900f53eab3503d1decd9d.mockapi.io/api/v1/users/tasks";

// const mapTasks = (tasks) =>
//     tasks.map(({ _id, ...rest }) => ({...rest, id: _id }));

export const getTasksList = (id) => {
    // eslint-disable-next-line no-unneeded-ternary
    const taskId = id ? id : "";
    return fetch(`${baseUrl}/${taskId}`).then((response) => response.json());
    // .then((tasks) => mapTasks(tasks));
};

export const createTask = (taskData) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(taskData),
    });
};

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(updatedTaskData),
    });
};