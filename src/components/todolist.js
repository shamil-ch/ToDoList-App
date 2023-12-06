import React from "react";

const ToDoList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={`${task.id}_${index}`}>
          <input
          id={`${task.id}_${index}`}
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />

          <label
          for = {`${task.id}_${index}`}
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor:'poniter' }}
          >
            {task.title}
          </label>
          <div className="delete-container">
            <button
              className="delete-button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
