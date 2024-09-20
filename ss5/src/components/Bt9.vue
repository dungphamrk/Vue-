<template>
    <div>
      <p><b>Gender : {{ gender }}</b></p>
      <button @click="randomGender">Random gender</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  let gender = ref("");
  
  const randomGender = () => {
    gender.value = Math.floor(Math.random() * 10000) % 2 ? "Nam" : "Nữ";
  };
  </script>
  
  <style>
  </style>
  