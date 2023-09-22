<script lang='ts'>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'PageLoader',
  })
</script>

<template>
  <div class='d-flex justify-content-center'>
    <div class='spinner-border text-secondary' role='status'>
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>