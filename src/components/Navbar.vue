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
    </RouterLink>
  </template>
</div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      links: [
        { title: "Home", url: "/" },
        { title: "Todo", url: "/todo" },
        { title: "Login", url: "/login" },
      ]
    }
  },
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
