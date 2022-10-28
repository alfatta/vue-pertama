<template>
  <form @submit.prevent="onFormSubmit">
    <input type="text" placeholder="Title" v-model="post.title">
    <input type="text" placeholder="Body" v-model="post.body">
    <button type="submit">{{ isEdit ? 'Update' : 'Save' }}</button>
  </form>
</template>

<script>
import Article from '../components/Article.vue';
import axios from 'axios'
import { editPost, insertPost } from '../network/blog';

export default {
  data() {
    return {
      isLoading: false,
      post: {
        title: '',
        body: '',
      }
    }
  },
  computed: {
    isEdit() {
      return this.$route.meta.type == 'edit'
    }
  },
  mounted() {
    if (this.isEdit) this.getArticles()
  },
  methods: {
    onFormSubmit() {
      this.isLoading = true
      if (this.isEdit) {
        editPost(this.post, this.$route.params.kode)
          .then((response) => {
            console.log(response.data)
            this.$router.replace('/blog/' + response.data.id)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            this.isLoading = false
          })
      } else {
        insertPost(this.post)
          .then((response) => {
            console.log(response.data)
            this.$router.replace('/blog/' + response.data.id)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },
    getArticles() {
      this.isLoading = true
      axios.get('http://localhost:3000/posts/' + this.$route.params.kode)
        .then((response) => {
          this.post.body = response.data.body
          this.post.title = response.data.title
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
  components: {
    Article
  }
}
</script>
