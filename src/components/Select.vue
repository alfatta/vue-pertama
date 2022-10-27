<template>
  <select
      @change="$emit('update:modelValue', $event.target.value)">
    <option
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :selected="item.value == modelValue">
      {{ item.title }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    modelValue: String
  },
  emits: ['update:modelValue']
}
</script>
