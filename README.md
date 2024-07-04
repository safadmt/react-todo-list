# Todo List App

This project is a simple Todo List application built with React, using `useReducer` and `useContext` for state management.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the necessary dependencies for the project.

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Structure

- `src`
  - `components`
    - `InputWithBtn.js`: Component for input with button.
    - `TodoContent.js`: Component to display todo items.
    - `ui.css` : styling UI
  - `context`
    - `TodoContext.js`: Context and provider for managing todo state.
    - `reducer.js`: Reducer function for state management.
  - `pages`
    - `todo`
      - `Todo.jsx`: Main page component for todo list.
      - `todo.css` : styling Todo.jsx UI
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.

## State Management

This application uses `useReducer` and `useContext` for state management. The state includes:
- `topic`: The current topic to be added or edited.
- `showAddTodo`: Boolean to control the visibility of the add todo input.
- `showEditTodo`: Boolean to control the visibility of the edit todo input.
- `topics`: Array of todo items.

### Actions

- `add`: Adds a new topic to the todo list.
- `edit`: Edits an existing topic in the todo list.
- `show_edit_input`: Shows the edit input.
- `hide_edit_input`: Hides the edit input.
- `delete`: Deletes a topic from the todo list.

## Usage

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd todo-list-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Features

- Add new todo items.
- Edit existing todo items.
- Delete todo items.
- Toggle between add and edit modes.


