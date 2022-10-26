<template>
  <Header />
  <Navbar />
  <button @click="menu = 'home'">Home</button>
  <button @click="menu = 'login'">Login</button>
  <div class="main">
    <div class="page">
      <HomePage v-if="menu == 'home'" />
      <LoginPage v-else-if="menu == 'login'" />
      <template v-else>
        <h3>404 Not Found</h3>
      </template>
    </div>
    <div class="sidebar">
      <Widget v-for="n in 10" :key="n" />
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Widget from "./components/Widget.vue";
import HomePage from "./pages/Home.vue";
import LoginPage from "./pages/Login.vue";

export default {
  data() {
    return {
      menu: 'home'
    }
  },
  components: {
    Header,
    Navbar,
    HomePage,
    LoginPage,
    Widget,
  }
};
</script>

<style>
div.main {
  display: flex;
}

div.page {
  flex: 3;
}

div.sidebar {
  flex: 1;
}
</style>
