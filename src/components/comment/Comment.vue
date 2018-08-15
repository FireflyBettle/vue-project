<template>
    <div class="container">
      <mt-field label="请发表评论" placeholder="" type="textarea" rows="4" v-modal="introduction"></mt-field>
      <mt-button type="primary" size="large">提交</mt-button>
    </div>
</template>

<script>
  export default {
    name: "Comment",
    data(){
      return {
        message:[]
      }
    }
  }
</script>

<style scoped>

</style>
