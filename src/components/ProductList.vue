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

<script>
import ProductItem from './ProductItem.vue'

export default {
  data() {
    return {
      productList: [
        { id: 1, name: 'Buah Mangga', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078', price: 20000 },
        { id: 2, name: 'Buah Apel', img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a', price: 30000 },
        { id: 3, name: 'Buah Jeruk', img: 'https://plus.unsplash.com/premium_photo-1664277022193-c2f11a4ed97a', price: 40000 },
        { id: 4, name: 'Buah Pisang', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e', price: 10000 },
        { id: 5, name: 'Buah Jambu', img: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46', price: 90000 },
      ],
      cart: [
        { id: 1, qty: 1 }
      ]
    }
  },
  methods: {
    addToCart(id) {
      this.cart.push({ id: id, qty: 1 })
    },
    updateCart(id, n) {
      const inCartIndex = this.cart.findIndex((i) => i.id == id)

      this.cart[inCartIndex].qty += n
      if (this.cart[inCartIndex].qty == 0) {
        this.cart.splice(inCartIndex, 1)
      }
    }
  },
  components: {
    ProductItem
  }
}
</script>
