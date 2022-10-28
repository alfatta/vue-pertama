<template>
<div class="article">
  <RouterLink :to="'/blog/' + data.id">
    <h2>{{ data.title }}</h2>
  </RouterLink>
  <a href="#" @click="deletePost"> DELETE </a>
  <p>{{ data.body }}</p>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { deletePost } from '../network/blog';

export default {
  props: {
    data: {
      type: Object,
      default(raw) {
        return { title: "-", body: "-" };
      }
    }
  },
  components: { RouterLink },
  methods: {
    deletePost(evt) {
      evt.preventDefault()
      console.log('click')
      deletePost(this.data.id)
        .then((response) => {
          console.log(response.data)
          this.$emit('delete')
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style>
div.article {
  margin: 10px;
  background-color: #f6f6f6;
  padding: 10px;
}
</style>
