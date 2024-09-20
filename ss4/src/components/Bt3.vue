<template>
  <div>
    <h1>bài 2</h1>
    <h3>Acreage:{{ area.width * area.height }}</h3>
    <button @click="handleChangValue">Change value</button>
  </div>
</template>
  
  <script setup>
  import { reactive } from "vue";
  
  const area = reactive({
    width:20 ,
    height: 10,
  });
  const handleChangValue = () => {
    area.height++;
    area.width +=20;
  };
  </script>
  
  <style>
</style>