<template>
  <Article />
  
  <Article 
    v-for="article in articles" :key="article.title"
    :data="article" />

</template>


<script>
import Article from '../components/Article.vue';

export default {
  data() {
    return {
      articles: [
        { title: "Berita 1", body: "Ini berita 1" },
        { title: "Berita 2", body: "Ini berita 2" },
        { title: "Berita 3", body: "Ini berita 3" },
        { title: "Berita 4", body: "Ini berita 4" },
        { title: "Berita 5", body: "Ini berita 5" },
        { title: "Berita 6", body: "Ini berita 6" },
        { title: "Berita 7", body: "Ini berita 7" },
        { title: "Berita 8", body: "Ini berita 8" },
        { title: "Berita 9", body: "Ini berita 9" },
        { title: "Berita 10", body: "Ini berita 10" },
      ]
    }
  },
  components: {
    Article
  }
}
</script>
