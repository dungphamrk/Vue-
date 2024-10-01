<template>
    <div>
      <h1>Bài 3</h1>
      <p>Ngày sinh</p>
      <input type="date" v-model="date" />
      <p>Value: {{ date }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const date = ref("");
  </script>
  
  <style>
  </style>