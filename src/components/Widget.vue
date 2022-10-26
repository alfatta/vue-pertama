<template>
<div class="widget">
  <h3>Widget</h3>
  <button @click="angka--">-</button>
  <span>Angkanya {{ angka }}</span>
  <button @click="angka++">+</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      angka: 0,
    }
  },
}
</script>

<style scoped>
button {
  padding: 10px;
}
</style>
