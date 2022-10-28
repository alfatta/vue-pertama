<template>
  <h3 v-if="isLoading">Loading...</h3>
  <RouterLink to="/blog/new" >Add New</RouterLink>
  <Article 
    v-for="article in articles" :key="article.title"
    :data="article"
    @delete="resetData" />
</template>

<script>
import Article from '../components/Article.vue';
import { getAllPost } from '../network/blog'

export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      page: 1
    }
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    resetData() {
      this.articles = []
      this.page = 1
      this.getArticles()
    },
    getArticles() {
      this.isLoading = true
      getAllPost(this.page)
        .then((response) => {
          this.articles.push(...response.data)
          this.page++

          // if (response.data.length) this.getArticles()
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  components: {
    Article
  }
}
</script>
