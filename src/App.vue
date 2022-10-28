<template>
  <Header />
  <Navbar />
  <div class="main">
    <div class="page">
      <RouterView />
    </div>
    <div class="sidebar">
      <!-- <Widget :value="angka" @update="(n) => angka = n" /> -->
        <p>{{ title }}</p>
      <Widget v-model="angka" v-model:title="title" />
      <ProductList />
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Widget from "./components/Widget.vue";
import ProductList from "./components/ProductList.vue";
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      angka: 0,
      title: ''
    }
  },
  components: {
    Header,
    Navbar,
    ProductList,
    Widget,
    RouterView
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
