<template>
  <li>
    <span>{{ waktu }}</span>
    <s v-if="todoItem.done">{{ todoItem.title }}</s>
    <span v-else>{{ todoItem.title }}</span>
    <a href="#" @click.prevent="$emit('delete')">x</a>
  </li>
</template>

<script>
import moment from 'moment'
import id from 'moment/dist/locale/id.js'

moment.locale('id', id)

export default {
  props: {
    todoItem: {
      type: Object,
      default() {
        return {
          done: false, title: '-', createdAt: moment.utc()
        }
      }
    }
  },
  emits: ['delete'],
  computed: {
    waktu() {
      return moment(this.todoItem.createdAt).local().fromNow()
    },
    asdf() {
      return moment().subtract(1, 'd').locale('jv').format()
    },
  }
}
</script>
