<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
    export default {
        name: "my-li"
    }
</script>

<style scoped>
  li {
    list-style: none;
    flex: 0 0 25%;
    text-align: center;
  }
</style>
