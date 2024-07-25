// Classes

class Todo {
  constructor(name, done = false) {
    this.name = name;
    this.done = done;
  }

  toggleDone = () => {
    this.done = !this.done;
  };
}

// Global Variables

const todoContainer = document.querySelector(".todoContainer");
const formElement = document.querySelector("form");
const todoInputElement = document.querySelector("input");

const todoList = [];

const renderTodoList = () => {
  todoContainer.innerHTML = "";

  todoList.forEach((todoItem, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    todoDiv.appendChild(setTodoTextBtn(todoItem));
    todoDiv.appendChild(setDelBtn(index));
    todoContainer.appendChild(todoDiv);
  });
};

// Eventlisteners

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// Helpter Functions

const loadTodoList = () => {
  const loadedTodoList = JSON.parse(localStorage.getItem("TodoList"));

  loadedTodoList.forEach((parsedTodo) => {
    const resurrectedTodo = new Todo(parsedTodo.name, parsedTodo.done);
    todoList.push(resurrectedTodo);
  });
  console.log(loadedTodoList);
};

const saveTodoList = () => {
  localStorage.setItem("TodoList", JSON.stringify(todoList));
};

const addTodo = () => {
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

const toggleTodoDone = (todoItem) => {
  todoItem.toggleDone();
  saveTodoList();
  renderTodoList();
};

const deleteTodo = (index) => {
  todoList.splice(index, 1);
  saveTodoList();
  renderTodoList();
};

const setTodoTextBtn = (todoItem) => {
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

const setDelBtn = (index) => {
  const todoDelBtn = document.createElement("button");
  todoDelBtn.classList.add("todoDeleteBtn");
  todoDelBtn.textContent = "x";
  todoDelBtn.addEventListener("click", () => {
    deleteTodo(index);
  });
  return todoDelBtn;
};

// Function Calls

loadTodoList();

renderTodoList();
