<template>
  <div class="header">
    <h1>
      {{ title }}
    </h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Website Pribadi"
    }
  }
}
</script>

<style scoped>
div.header {
  background-color: black;
  color: white;
  padding: 20px;
}

h1 {
  font-size: 32px;
}
</style>
