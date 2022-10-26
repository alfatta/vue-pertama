<template>
<div class="navbar" :style="{
  padding: '5px 20px',
  display: 'flex'
}">
  <template v-for="link in links" :key="url">
    <a
      v-if="link.needLogin == isLogin"
      :href="link.url"
      @click="(evt) => urlHandler(link.title, evt)"
      :style="{
        padding: '10px 20px',
        textDecoration: 'none',
        color: 'black',
      }">
      {{ link.title }}
    </a>
  </template>
</div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      links: [
        { title: "Google", url: "google.com", needLogin: true },
        { title: "Facebook", url: "facebook.com", needLogin: true },
        { title: "Logout", url: "github.com", needLogin: true },
        { title: "Login", url: "github.com", needLogin: false },
        { title: "Register", url: "github.com", needLogin: false },
      ]
    }
  },
  methods: {
    urlHandler(title, evt) {
      if (title == 'Login') {
        this.isLogin = true
        evt.preventDefault()
      } else if (title == 'Logout') {
        this.isLogin = false
        evt.preventDefault()
      }
    }
  },
}
</script>


<style>
a:hover {
  background-color: lightcyan;
}
</style>
