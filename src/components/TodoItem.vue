<template>
  <li>
    <s v-if="todoItem.done">{{ todoItem.title }}</s>
    <span v-else>{{ todoItem.title }}</span>
    <a href="#" @click.prevent="$emit('delete')">x</a>
  </li>
</template>

<script>
export default {
  props: {
    todoItem: {
      type: Object,
      default() {
        return {
          done: false, title: '-'
        }
      }
    }
  },
  emits: ['delete']
}
</script>
