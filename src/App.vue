<template>
  <p>Usia saya : {{ usia }} tahun</p>
  <input type="number" v-model.number="usia" />

  <p v-if="usia < 20">
    Usia anda dibawah 20 tahun ( pakai v-if )
  </p>
  <h1 v-else-if="usia == 31">
    Usia anda 31 ya?
  </h1>
  <p :style="{color: 'purple'}" v-else-if="usia >= 20">
    Usia anda diatas 20 tahun
  </p>
  <div>
    <p v-if="usia == 900">ini coba coba</p>
    <p v-else>
      Usia anda diatas 20 tahun
    </p>
  </div>

  <p v-show="usia < 20">
    Usia anda dibawah 20 tahun ( pakai v-show )
  </p>

  <p>Terima kasih</p>
</template>

<script>
export default {
  data() {
    return {
      usia: 20,
    };
  },
};
</script>
