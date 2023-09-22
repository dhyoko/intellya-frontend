<script lang='ts'>
  export default {
    name: 'ContentLayout',
    props: {
      title: String,
      subtitle: String
    }
  }
</script>

<template>
  <div class='layout container-xxl'>
    <h1>{{ title }}</h1>
    <h5>{{ subtitle }}</h5>
    <slot></slot>
  </div>
</template>

<style scoped>
  .layout {
    padding-top: 50px;
  }
  h1 {
    margin-bottom: 20px;
  }
  h5 {
    margin-bottom: 35px;
  }
</style>