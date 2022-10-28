<template>
  <h3 v-if="isLoading">Loading...</h3>

  <RouterLink :to="`/blog/${$route.params.kode}/edit`" >Edit</RouterLink>

  <Article :data="article" />

  <ul style="margin-left: 30px;">
    <li v-for="comment in comments" :key="comment.id">
      {{ comment.email }} : {{ comment.name }}
    </li>
  </ul>
</template>

<script>
import Article from '../components/Article.vue';
import axios from 'axios'
import { RouterLink } from 'vue-router';
import { getPost } from '../network/blog';

export default {
  data() {
    return {
      article: {},
      comments: [],
      isLoading: false,
    }
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      this.isLoading = true
      getPost(this.$route.params.kode)
        .then((response) => {
          this.article = response.data
          this.getComments()
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getComments() {
      this.isLoading = true
      axios.get('http://localhost:3000/comments/', {
        params: {
          postId: this.$route.params.kode
        }
      })
        .then((response) => {
          this.comments = response.data
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
