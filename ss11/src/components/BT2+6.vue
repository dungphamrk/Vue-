<template>
  <div>
    <h1>Bài 2 + Bài 6</h1>
    <h1>count :{{count }}</h1>
    <button   @click="handleUpdate">Counter</button>
  </div>
</template>

<script setup>
import { onUpdated,ref } from 'vue';
    const count = ref(0);
    const handleUpdate =()=>{
        count.value++;
    }
    onUpdated(()=>{
        console.log("Dữ liệu đã thay đổi");
        document.title=count.value;
    })
    
</script>

<style>

</style>