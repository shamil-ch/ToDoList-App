import React from "react";

const ToDoList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={`${task.id}_${index}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />

          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </span>
          <button
            className="delete-button"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
