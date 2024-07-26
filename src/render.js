import { setDelBtn, setTodoTextBtn } from "./helper";

const todoContainer = document.querySelector(".todoContainer");
const todoList = [];

export const renderTodoList = () => {
  todoContainer.innerHTML = "";

  todoList.forEach((todoItem, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    todoDiv.appendChild(setTodoTextBtn(todoItem));
    todoDiv.appendChild(setDelBtn(index));
    todoContainer.appendChild(todoDiv);
  });
};
