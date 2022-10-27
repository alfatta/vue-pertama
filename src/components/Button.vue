<template>
  <button :class="classList">
    <slot name="prefix" />
    <slot />
    <span v-if="notif > 0">{{ notif }}</span>
  </button>
</template>

<script>
export default {
  props: {
    pill: Boolean,
    notif: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classList() {
      let classList = []

      if (this.pill) classList.push('pill')

      return classList.join(' ')
    }
  }
}
</script>

<style scoped>
button {
  padding: 5px 10px;
}

button.pill {
  border-radius: 10px;
}

span {
  padding: 5px 10px;
  border-radius: 50%;
  background-color: brown;
  color: white;
}
</style>
