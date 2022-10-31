<template>
<div class="widget">
  <h3>Widget</h3>
  <button @click="counter.decrement()">-</button>
  <span>Angkanya {{ counter.count }}</span>
  <button @click="counter.increment()">+</button>
  <!-- <input type="text" :value="title" @input="$emit('update:title', $event.target.value)"> -->
</div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

</script>

<style scoped>
button {
  padding: 10px;
}
</style>
