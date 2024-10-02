<template>
    <div>
      <h1>Thời gian hiện tại: {{ time }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  const time = ref('');
  const updateTime = () => {
    const now = new Date().toLocaleTimeString('vi-VN', { hour12: false });
    time.value = now;
  };
  let intervalId;
  onMounted(() => {
    updateTime(); 
    intervalId = setInterval(updateTime, 1000); 
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
  });
  </script>