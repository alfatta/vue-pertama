<template>
<div>
  <form @submit.prevent="saveTodo">
    <input type="text" v-model="todo" required>
    <button type="submit">Save</button>
  </form>
</div>
<ul>
  <li v-for="(todoItem, i) in todoList" :key="i">
    <s v-if="todoItem.done">{{ todoItem.title }}</s>
    <span v-else>{{ todoItem.title }}</span>
    <a href="#" @click.prevent="() => deleteTodo(i)">x</a>
  </li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      todoList: []
    }
  },
  setup() {

  },
  mounted() {

  },
  methods: {
    saveTodo() {
      if (this.todo.length > 0) {
        this.todoList.push({
          title: this.todo,
          done: false
        })
        this.todo = ""
      }
    },
    deleteTodo(index) {
      // this.todoList.splice(index, 1)
      this.todoList[index].done = true

      this.todoList
        .sort((x, y) => (x.done === y.done) ? 0 : x.done ? 1 : -1)
    }
  }
}
</script>
