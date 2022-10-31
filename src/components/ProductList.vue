<template>
<div class="product-list">
  <h3>Produk Terbaru</h3>
  <ProductItem
    v-for="product in productList"
    :key="product.id"
    :product="product"
    :cart="cart"
    @add="addToCart"
    @update="updateCart" />
</div>
</template>

<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue'
import { useCalculator } from '../composables/useCalculator'

// PRODUCT
const productList = ref([
  { id: 1, name: 'Buah Mangga', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078', price: 20000 },
  { id: 2, name: 'Buah Apel', img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a', price: 30000 },
  { id: 3, name: 'Buah Jeruk', img: 'https://plus.unsplash.com/premium_photo-1664277022193-c2f11a4ed97a', price: 40000 },
  { id: 4, name: 'Buah Pisang', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e', price: 10000 },
  { id: 5, name: 'Buah Jambu', img: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46', price: 90000 },
])

// CART
const cart = ref([
  { id: 1, qty: 1 }
])
const addToCart = (id) => {
  cart.value.push({ id: id, qty: 1 })
}
const updateCart = (id, n) => {
  const inCartIndex = cart.value.findIndex((i) => i.id == id)

  cart.value[inCartIndex].qty += n
  if (cart.value[inCartIndex].qty == 0) {
    cart.value.splice(inCartIndex, 1)
  }
}

const angka = useCalculator(0)
console.log(angka.result.value)
angka.tambah(10)
angka.kali(20)
console.log(angka.result.value)




</script>
