<template>
  <Article v-for="n in 10" :key="n" />
</template>


<script>
import Article from '../components/Article.vue';

export default {
  components: {
    Article
  }
}
</script>
