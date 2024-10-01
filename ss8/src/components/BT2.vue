<template>
    <div>
      <h1>Bài 2</h1>
      <p>Màu sắc</p>
      <input type="color" v-model="color" />
      <p>Value: {{ color }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const color = ref("");
  </script>
  
  <style>
  </style>