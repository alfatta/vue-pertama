<template>
  <Header />
  <Navbar />
  <div class="articles">
    <div class="article" v-for="n in 10"></div>
  </div>
  <div class="sidebar">
    <div class="widget" v-for="n in 10"></div>
  </div>
  <div class="footer"></div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Header,
    Navbar,
  }
};
</script>
