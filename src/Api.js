const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = async () => {
  const response = await fetch(API_URL);
  const tasks = await response.json();
  return tasks;
};

export const addTask = async (title) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed: false,
    }),
  });
  const newTask = await response.json();
  return newTask;
};

export const updateTask = async (id, completed) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  });
  const updatedTask = await response.json();
  return updatedTask;
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.ok;
};
