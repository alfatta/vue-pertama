<template>
  <MyCustomParagraph
    title="Ini Halaman Login"
    warna="success"
    pakaiKotak />

  <MyCustomParagraph
    v-for="(info, i) in informasi" :key="i"
    :title="info" />

  <MyCustomParagraph :title="undefined" />
  <MyCustomParagraph title="" />

  <input type="text" ref="username" v-model="username">
  <input type="text" ref="password">

  <p v-for="n in 10" ref="paragraf"> test </p>

</template>

<script>
export default {
  data() {
    return {
      username: 'test',
      informasi: [
        "berita 1",
        "berita 2",
        "berita 3",
      ]
    }
  },
  mounted() {
    this.$refs.username.focus()
  }
}
</script>
