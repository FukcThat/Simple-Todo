import { renderTodoList } from "./render";

// Load from Local Storage
export const loadTodoList = () => {
  const loadedTodoList = JSON.parse(localStorage.getItem("TodoList"));

  loadedTodoList.forEach((parsedTodo) => {
    const resurrectedTodo = new Todo(parsedTodo.name, parsedTodo.done);
    todoList.push(resurrectedTodo);
  });
  console.log(loadedTodoList);
};

// Save to Local Storage
export const saveTodoList = () => {
  localStorage.setItem("TodoList", JSON.stringify(todoList));
};

// Toggle "done"
export const toggleTodoDone = (todoItem) => {
  todoItem.toggleDone();
  saveTodoList();
  renderTodoList();
};

// Delete Todo
export const deleteTodo = (index) => {
  todoList.splice(index, 1);
  saveTodoList();
  renderTodoList();
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
