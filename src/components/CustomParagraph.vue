<template>
  <p :style="{ color }" :class="class">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "-"
    },
    warna: {
      type: String,
      validator(value) {
        return ['primary', 'success', 'danger'].includes(value)
      },
      default: 'primary'
    },
    pakaiKotak: {
      type: Boolean,
    }
  },
  computed: {
    color() {
      if (this.warna == 'success') return 'green'
      if (this.warna == 'danger') return 'red'
      return 'blue'
    },
    class() {
      if (this.pakaiKotak) return 'pakai-kotak'
    }
  }
}
</script>

<style scoped>
p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}

p.pakai-kotak {
  padding: 20px;
  border: 1px solid;
}
</style>
