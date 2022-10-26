<template>
  <Header />
  <Navbar />
  <div class="main">
    <div class="articles">
      <Article v-for="n in 10" :key="n" />
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
import Article from "./components/Article.vue";
import Widget from "./components/Widget.vue";

export default {
  components: {
    Header,
    Navbar,
    Article,
    Widget,
  }
};
</script>

<style>
div.main {
  display: flex;
}

div.articles {
  flex: 3;
}

div.sidebar {
  flex: 1;
}
</style>
