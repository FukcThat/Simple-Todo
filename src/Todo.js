class Todo {
  constructor(name, done = false) {
    this.name = name;
    this.done = done;
  }

  toggleDone = () => {
    this.done = !this.done;
  };
}

module.exports = Todo;
