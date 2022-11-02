<script setup>
import { ref, computed } from 'vue';

const data = ref("test")

const npwp = ref("")
const npwpFormatted = computed({
  get() {
    return npwp.value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/, '$1.$2.$3.$4-$5.$6');
  },
  set(value) {
    npwp.value = value.replace(/[\.|-]/g, '')
  }
})
</script>

<template>
  <textarea v-model="data"></textarea>
  <p>{{ data }}</p>
  <p v-html="data"></p>
  <input v-model="npwpFormatted" />
</template>
