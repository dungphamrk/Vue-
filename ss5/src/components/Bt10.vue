<template>
    <div>
      <h1>Bài 10</h1>
      <button @click="randomNumber">Random number</button>
      <p>{{ array }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const array = ref([]);
  
  const randomNumber = () => {
    array.value.push(Math.floor(Math.random() * 100));
  };
  </script>
  
  <style>
  </style>
  