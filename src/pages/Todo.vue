<template>
<TodoForm @update="saveTodo"/>
<TodoList>
  <TodoItem
    v-for="(todoItem, i) in todoStore.todos"
    :key="i"
    :todoItem="todoItem"
    @delete="() => todoStore.deleteTodo(i)" />
</TodoList>

<Button :notif="5"> Ini Tombol 1 </Button>
<Button pill> Ini Tombol 2 </Button>
<Button>
  Ini Tombol 3
  <template #prefix>
    btn-
  </template>
</Button>

<p>{{ todoStore.todos.join(', ') }}</p>
</template>

<script>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
import TodoItem from '../components/TodoItem.vue'
import Button from '../components/Button.vue'

import { useTodoStore } from '../stores/todo'

import { mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useTodoStore),
  },
  components: {
    TodoForm,
    TodoList,
    TodoItem,
    Button,
  },

  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmount() {
    console.log('unmount')
  },
}
</script>
