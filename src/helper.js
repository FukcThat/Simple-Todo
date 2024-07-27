import { todoList } from ".";
import { renderTodoList } from "./render";
import Todo from "./Todo";

const todoInputElement = document.querySelector("input");
const formElement = document.querySelector("form");

// Add Todo
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
  renderTodoList(todoList);

  // Reset Form
  formElement.reset();
};

// Load from Local Storage
export const loadTodoList = () => {
  const loadedTodoList = JSON.parse(localStorage.getItem("TodoList"));

  if (!loadedTodoList) return;

  loadedTodoList.forEach((parsedTodo) => {
    const resurrectedTodo = new Todo(parsedTodo.name, parsedTodo.done);
    todoList.push(resurrectedTodo);
  });
};

// Save to Local Storage
export const saveTodoList = () => {
  localStorage.setItem("TodoList", JSON.stringify(todoList));
};

// Toggle "done"
export const toggleTodoDone = (todoItem) => {
  todoItem.toggleDone();
  saveTodoList();
  renderTodoList(todoList);
};

// Delete Todo
export const deleteTodo = (index) => {
  todoList.splice(index, 1);
  saveTodoList();
  renderTodoList(todoList);
};

// Create Todo Element
export const setTodoTextBtn = (todoItem) => {
  const todoTextBtn = document.createElement("button");

  todoTextBtn.classList.add("todoTextBtn");
  todoTextBtn.textContent = todoItem.name;

  if (todoItem.done) {
    todoTextBtn.classList.add("done");
  }

  todoTextBtn.addEventListener("click", () => {
    toggleTodoDone(todoItem);
  });
  return todoTextBtn;
};

// Create Delete Element Button
export const setDelBtn = (index) => {
  const todoDelBtn = document.createElement("button");
  todoDelBtn.classList.add("todoDeleteBtn");
  todoDelBtn.textContent = "x";
  todoDelBtn.addEventListener("click", () => {
    deleteTodo(index);
  });
  return todoDelBtn;
};
