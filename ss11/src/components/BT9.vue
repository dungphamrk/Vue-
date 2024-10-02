<template>
    <div>
      <h1>Ứng dụng đếm số</h1>
      <p>Count: {{ count }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const count = ref(0);
  
  onMounted(() => {
    setInterval(() => {
      count.value += 1;
    }, 1000); 
  });
  </script>