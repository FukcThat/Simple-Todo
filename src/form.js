import { saveTodoList } from "./helper";
import { renderTodoList } from "./render";
import { Todo } from "./Todo";

const formElement = document.querySelector("form");
const todoInputElement = document.querySelector("input");

export const submitNewTodo = formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// Add new Todo
export const addTodo = () => {
  if (todoInputElement.value === "") {
    window.alert("Please enter a task.");
    return;
  }

  // Make a new Todo
  const newTodo = new Todo(todoInputElement.value);

  // Add todo to list
  todoList.push(newTodo);

  // Save it to local Storage
  saveTodoList();

  // Render new List
  renderTodoList();

  // Reset Form
  formElement.reset();
};
