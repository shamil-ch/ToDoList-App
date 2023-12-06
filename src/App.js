import React, { useEffect, useState } from "react";
import ToDoList from "./components/todolist";
import { fetchTasks, updateTask, deleteTask } from "./Api";
import "./App.css";
import { Waveform } from "@uiball/loaders";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getTasks = async () => {
      setLoading(true);
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
      setLoading(false);
    };

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (storedTasks.length === 0) {
      getTasks();
    } else {
      setTasks(storedTasks);
    }
  }, []);

  const storeTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleAddTask = async () => {
    if (!newTaskTitle) return;

    setLoading(true);
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      completed: false,
    };
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setTasks((prevTasks) => [newTask, ...prevTasks]);
      setNewTaskTitle("");

      const allTasks = [newTask, ...tasks];
      storeTasksToLocalStorage(allTasks);
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleTaskComplete = async (id) => {
    setLoading(true);
    const taskToUpdate = tasks.find((task) => task.id === id);

    if (taskToUpdate) {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setTasks(updatedTasks);
        await updateTask(id, !taskToUpdate.completed);
        storeTasksToLocalStorage(updatedTasks);
      } catch (error) {
        console.error("Error updating task:", error);
      } finally {
        setLoading(false);
      }
    }
  };


  const handleDeleteTask = async (id) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const isDeleted = await deleteTask(id);
      if (isDeleted) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        storeTasksToLocalStorage(tasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          className="new-task-input"
          type="text"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
       
      </div>
      {loading && <div className="waveform-container"><Waveform /></div>}
      <ToDoList
        tasks={tasks}
        onToggleComplete={handleTaskComplete}
        onDeleteTask={handleDeleteTask}
      />
       
    </div>
  );
};

export default App;
