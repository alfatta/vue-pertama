<template>

  <input type="text" ref="username" v-model="username">
  <input type="text" ref="password">

  <p v-for="n in 10" ref="paragraf"> test </p>

</template>

<script>
export default {
  data() {
    return {
      username: 'test'
    }
  },
  mounted() {
    this.$refs.username.focus()
  }
}
</script>
