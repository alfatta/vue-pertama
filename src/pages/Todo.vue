<template>
<TodoForm @update="saveTodo"/>
<ul>
  <TodoItem
    v-for="(todoItem, i) in todoList"
    :key="i"
    :todoItem="todoItem"
    @delete="() => deleteTodo(i)" />
</ul>
</template>

<script>
import TodoForm from '../components/TodoForm.vue'
import TodoItem from '../components/TodoItem.vue'

export default {
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    saveTodo(todo) {
      this.todoList.push({
        title: todo,
        done: false
      })
    },
    deleteTodo(index) {
      // this.todoList.splice(index, 1)
      this.todoList[index].done = true

      this.todoList
        .sort((x, y) => (x.done === y.done) ? 0 : x.done ? 1 : -1)
    }
  },
  components: {
    TodoForm,
    TodoItem,
  }
}
</script>
