<template>
  <div>
    <h1>Bài 9</h1>
    <button v-on:click="handleClick">Click {{count}} lần</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    let count = ref(0);
    const handleClick=()=>{
        count.value++
    }
</script>

<style>

</style>