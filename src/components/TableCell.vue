<template>
  <th v-if="head">
    <slot />
  </th>
  <td v-else>
    <slot />
  </td>
</template>

<script>
export default {
  props: {
    head: Boolean
  }
}
</script>
