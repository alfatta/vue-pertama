<template>
  <Header />
  <Navbar />
  <button @click="menu = 'home'">Home</button>
  <button @click="menu = 'login'">Login</button>
  <button @click="menu = 'todo'">Todo</button>
  <div class="main">
    <div class="page">
      <HomePage v-if="menu == 'home'" />
      <LoginPage v-else-if="menu == 'login'" />
      <TodoPage v-else-if="menu == 'todo'" />
      <template v-else>
        <h3>404 Not Found</h3>
      </template>
    </div>
    <div class="sidebar">
      <!-- <Widget :value="angka" @update="(n) => angka = n" /> -->
        <p>{{ title }}</p>
      <Widget v-model="angka" v-model:title="title" />
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
import TodoPage from "./pages/Todo.vue";

export default {
  data() {
    return {
      menu: 'home',
      angka: 0,
      title: ''
    }
  },
  components: {
    Header,
    Navbar,
    HomePage,
    LoginPage,
    TodoPage,
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
