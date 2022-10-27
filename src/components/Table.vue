<template>
  <table>
    <thead>
      <slot name="head" />
    </thead>
    <tbody>
      <slot />
    </tbody>
    <tfoot>
      <slot name="foot" />
    </tfoot>
  </table>
</template>

<script>
export default {}
</script>
