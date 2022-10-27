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
</div>
</template>

<script>
export default {
  emits: ['add'],
  props: {
    product: Object,
    cart: Array
  },
  computed: {
    inCartIndex() {
      const productId = this.product.id
      return this.cart.findIndex(function (i) {
        return i.id == productId
      })
      // return this.cart.findIndex((i) => i.id == this.product.id)
    },
    inCart() {
      return this.inCartIndex >= 0
    },
    inCartQty() {
      return this.inCart ? this.cart[this.inCartIndex].qty : 0
    }
  }
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
