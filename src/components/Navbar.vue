<template>
<div class="navbar" :style="{
  padding: '5px 20px',
  display: 'flex'
}">
  <template v-for="link in links" :key="url">
    <RouterLink
      :to="link.url"
      :style="{
        padding: '10px 20px',
        textDecoration: 'none',
      }">
      {{ link.title }}

      <span v-if="link.url == '/todo' && todoStore.totalActiveTodos">
        ({{ todoStore.totalActiveTodos }})
      </span>
    </RouterLink>
  </template>
</div>
</template>

<script>
import { mapStores } from 'pinia';
import { useTodoStore } from '../stores/todo';
export default {
  data() {
    return {
      isLogin: false,
      links: [
        { title: "Login", url: "/" },
        { title: "Todo", url: "/todo" },
        { title: "Blog", url: "/blog" },
      ]
    }
  },
  computed: {
    ...mapStores(useTodoStore)
  }
}
</script>


<style>
a {
  color: black;
}
a:hover {
  background-color: lightcyan;
}
a.router-link-active {
  font-weight: bold;
  color: brown;
}
</style>
