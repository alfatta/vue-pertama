<template>
<TodoForm @update="saveTodo"/>
<TodoList>
  <TodoItem
    v-for="(todoItem, i) in todoList"
    :key="i"
    :todoItem="todoItem"
    @delete="() => deleteTodo(i)" />
</TodoList>

<Button :notif="5"> Ini Tombol 1 </Button>
<Button pill> Ini Tombol 2 </Button>
<Button>
  Ini Tombol 3
  <template #prefix>
    btn-
  </template>
</Button>
</template>

<script>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
import TodoItem from '../components/TodoItem.vue'
import Button from '../components/Button.vue'

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
    TodoList,
    TodoItem,
    Button,
  }
}
</script>
