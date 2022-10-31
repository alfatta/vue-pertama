import moment from "moment";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      todos: [],
    };
  },
  getters: {
    totalTodos() {
      return this.todos.length;
    },
    totalActiveTodos() {
      return this.todos.filter((i) => !i.done).length;
    },
  },
  actions: {
    addTodo(todo) {
      this.todos.push({
        title: todo,
        done: false,
        createdAt: moment.utc(),
      });
    },
    deleteTodo(index) {
      this.todos[index].done = true;

      this.todos.sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1));
    },
  },
});
