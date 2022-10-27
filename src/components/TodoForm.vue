<template>
<div>
  <form @submit.prevent="saveTodo">
    <input type="text" v-model="todo" required>
    <button type="submit">Save</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      todo: ''
    }
  },
  emits: ['update'],
  methods: {
    saveTodo() {
      if (this.todo.length > 0) {
        this.$emit('update', this.todo)
        this.todo = ""
      }
    },
  }
}
</script>
