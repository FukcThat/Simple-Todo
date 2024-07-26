// Classes

import { submitNewTodo } from "./form";
import { deleteTodo, loadTodoList, toggleTodoDone } from "./helper";
import { renderTodoList } from "./render";

// Global Variables

// Eventlisteners

submitNewTodo();

// Helpter Functions

toggleTodoDone();
deleteTodo();

// Function Calls

loadTodoList();

renderTodoList();
