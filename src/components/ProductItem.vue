<template>
<div class="product-item">
  <img src="https://via.placeholder.com/150" loading="eager" ref="placeholder" />
  <img :src="product.img" loading="lazy" style="visibility: hidden; height: 0" ref="realimage" @load="swapImage" />
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
import { computed, ref } from 'vue'
import { useCounterStore } from '../stores/counter';


const placeholder = ref(null)
const realimage = ref(null)

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
const swapImage = () => {
  placeholder.value.style.visibility = 'hidden'
  placeholder.value.style.height = '0'
  realimage.value.style.visibility = 'visible'
  realimage.value.style.height = 'auto'
}

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
