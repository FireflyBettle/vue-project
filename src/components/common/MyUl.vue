<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
    export default {
        name: "my-ul"
    }
</script>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 150px;
    align-content: space-around;
  }
</style>
