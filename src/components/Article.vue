<template>
<div class="article">
  <h2>{{ data.title }}</h2>
  <p>{{ data.body }}</p>
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default(raw) {
        return { title: '-', body: '-' }
      }
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
