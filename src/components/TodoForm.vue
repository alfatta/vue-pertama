<template>
<div>
  <form @submit.prevent="saveTodo">
    <input type="text" v-model="todo" required>
    <button type="submit">Save</button>
  </form>
</div>
</template>

<script>
import { mapStores } from 'pinia'
import { useTodoStore } from '../stores/todo'
export default {
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    ...mapStores(useTodoStore)
  },
  emits: ['update'],
  methods: {
    saveTodo() {
      if (this.todo.length > 0) {
        this.todoStore.addTodo(this.todo)
        this.todo = ""
      }
    },
  }
}
</script>
