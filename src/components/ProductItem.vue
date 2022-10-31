<template>
<div class="product-item">
  <img :src="product.img" />
  <h4>{{ product.name }}</h4>
  <p>Rp.{{ product.price }}</p>
  <template v-if="inCart">
    <button @click="$emit('update', product.id, -1)">
      -
    </button>
    <span>{{ inCartQty }}</span>
    <button @click="$emit('update', product.id, 1)">
      +
    </button>
  </template>
  <button @click="$emit('add', product.id)" v-else>
    Add to Cart
  </button>

  <p>Ini nilai counter {{ counter.count }}</p>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore()

defineEmits(['add', 'update'])
const props = defineProps({
  product: Object,
  cart: Array
})

const inCartIndex = computed(() => {
  const productId = props.product.id
  return props.cart.findIndex((i) => i.id == productId)
})
const inCart = computed(() => inCartIndex.value >= 0)
const inCartQty = computed(() => (inCart ? props.cart[inCartIndex.value].qty : 0))

</script>

<style scoped>
.product-item {
  margin-bottom: 10px;
}

img {
  width: 100%;
  max-height: 75px;
  object-fit: cover;
}
</style>
