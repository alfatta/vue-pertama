<template>
  <p>Usia saya : {{ usia }} tahun</p>
  <input type="number" v-model.number="usia" />

  <template v-if="usiaDiatas20">
    <p>Selamat Pagi Pak</p>
    <p>Usia anda diatas 20</p>
  </template>

  <template v-else>
    <p>Selamat Pagi Kak</p>
    <p>Usia anda tidak diatas 20</p>
  </template>

  <p>Terima kasih</p>
</template>

<script>
export default {
  data() {
    return {
      usia: 20,
    };
  },
  computed: {
    usiaDiatas20() {
      return this.usia > 20;
    },
  },
};
</script>
