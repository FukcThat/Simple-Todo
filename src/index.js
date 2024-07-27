// Classes

import { addTodo, loadTodoList, saveTodoList } from "./helper";
import { renderTodoList } from "./render";

// Global Variables

const formElement = document.querySelector("form");
export const todoList = [];

// Eventlisteners

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// Helpter Functions

// Function Calls

loadTodoList();
renderTodoList(todoList);
