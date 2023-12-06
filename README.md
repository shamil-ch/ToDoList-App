# To-Do List App

## Overview

This is a simple To-Do List application built with React that allows you to manage your tasks. It interacts with the JSONPlaceholder API to fetch, add, update, and delete tasks.

## How to Run the Application

1. Clone the repository:

   git clone 


2. Install dependencies:

    cd <project-folder>

    npm install

3. Run the application:
    
    npm start

The application should now be running at http://localhost:3000.

4. Interacting with the JSONPlaceholder API

    The application uses the JSONPlaceholder API to simulate CRUD operations. The API provides a fake online REST API for testing and prototyping.

    Fetch Tasks: The initial tasks are fetched from the API at the start of the application.
    Add Task: When you add a new task, it is also added to the JSONPlaceholder API.
    Update Task: When you mark a task as complete, it is updated on the API.
    Delete Task: When you delete a task, it is removed from both the application state and the API.

5. Notes

    The application uses local storage to persist tasks between sessions.
    Styling is done with CSS, and you can modify the styles in the App.css and todolist.js files to suit your preferences.


