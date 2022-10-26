<template>
  <p>Nama saya {{ nama }}</p>
  <!-- <input type="text" v-model="nama" /> -->
  <input type="text" v-model="namaDepan" placeholder="nama depan" />
  <input type="text" v-model="namaBelakang" placeholder="nama belakang" />
  <button @click="clearNama">Reset</button>
</template>

<script>
export default {
  data() {
    return {
      namaDepan: "",
      namaBelakang: "",
    };
  },
  methods: {
    clearNama() {
      this.namaDepan = "";
      this.namaBelakang = "";
    },
  },
  computed: {
    nama() {
      return this.namaDepan + " " + this.namaBelakang;
    },
    // nama: {
    //   set(value) {
    //     const list = value.split(" ");
    //     console.log(value, list);
    //     this.namaDepan = list[0] || "";
    //     this.namaBelakang = list[1..] || "";
    //   },
    //   get() {
    //     return this.namaDepan + " " + this.namaBelakang;
    //   },
    // },
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
