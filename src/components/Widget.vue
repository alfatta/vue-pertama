<template>
<div class="widget">
  <h3>Widget</h3>
  <button @click="$emit('update:modelValue', modelValue - 1)">-</button>
  <span>Angkanya {{ modelValue }}</span>
  <button @click="$emit('update:modelValue', modelValue + 1)">+</button>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)">
</div>
</template>

<script>
export default {
  props: ['modelValue', 'title'],
  emits: ['update:modelValue', 'update:title'],
}
</script>

<style scoped>
button {
  padding: 10px;
}
</style>
